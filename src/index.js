import Router from 'router';
import queryString from 'query-string';
import Q from 'q';
import { env } from './helper';

const app = Router({
  mergeParams: true,
});

mimikModule.exports = (context, req, res) => {
  global.context = context;
  app(req, res, (e) => {
    res.end(JSON.stringify({ code: e ? 400 : 404, message: e || 'Not Found' }));
  });
};

// Sample HTTP Request
app.get('/', (req, res) => {
  res.end('Hello World!');
});

// Sample HTTP Request to return the environment variables
app.get('/env', (req, res) => {
  res.end(JSON.stringify(env()));
});

// Sample HTTP Request with Parameters
app.get('/sayHello/:name', (req, res) => {
  res.end(`Hello ${req.params.name}`);
});

// Sample HTTP Request with Query
app.get('/add', (req, res) => {
  const query = queryString.parse(req._parsedUrl.query);
  res.end(`result is ${Number(query.x) + Number(query.y)}`);
});

// Sample Promise with Q
app.get('/promise', (req, res) => {
  const simplePromise = Q.Promise((resolve) => {
    resolve('From the Q promise.');
  });
  simplePromise.then(answer => res.end(answer));
});

// Sample HTTP request with JSON Body and return it
app.post('/form', (req, res) => {
  res.end(req.body);
});

//Trivial ping, added as an additional service
app.get('/ping/:name', (req, res) => {

  const msg = {name: req.params.name, date: new Date()};
  res.end(JSON.stringify(msg));
});

app.get('/localDevices', (request, response) => {
  context.http.request(({
    url: 'http://localhost:8083/mds/v1/nodes?clusters=linkLocal',
    success: function(r) {
      if (!request.authorization) {
        response.status = 403;
        response.end(JSON.stringify({ 'msg': 'missing bearer token' }, 2, null));
        return;
      }
      const authorization = request.authorization.split(' ');
      if (authorization.length < 2) {
        response.status = 403;
        response.end(JSON.stringify({ 'msg': 'missing bearer token' }, 2, null));
        return;
      }
      const token = authorization[1];
      const nodes = JSON.parse(r.data);
      const data = JSON.stringify(nodes.data);

      context.edge.decryptEncryptedNodesJson({
        type: 'local',
        data,
        token,
        success: function(result) {
          response.end(JSON.stringify(JSON.parse(result.data), null, 2));
        },
        error: function(err) {
          response.end(err.message);
        }
      });
    },
    error: function(err) {
      response.end(err.message);
    }
  }));
});
