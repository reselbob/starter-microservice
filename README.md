# starter-microservice

TABLE OF CONTENTS

* [Objective](#objective)
* [Important Installation Prerequisites](#important-installation-prerequisites)
* [Build Process](#build-process)
* [Deploying the `starter-microservice`](#deploying-the-starter-microservice)


## Objective


The objective of this project is show you how to create an Edge microservice using this demonstration `starter-microservice`

## Important Installation Prerequisites


In order to create a microservice using Mimik Edge, **you must have a Mimik Developer account.** You can sign up for a Mimik Developer account here: [https://developer.mimik.com/console](https://devops.com/lock-down/https://developer.mimik.com/console).

Once you've created a Mimik Developer account, makes sure that [Git](https://git-scm.com/), [Node.js®](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are installed on your development machine.

Then, you will need to install the following **critically important** items: 

* Mimik Edge SDK
* Mimik Edge Engine
* Mimik Edge CLI Tool

Also, you will need to create an Edge Access Token.

The following sections provide the information for installing the prerequisites.


### Installing the Mimik Edge SDK

You can find the various versions of the Edge SDK at this URL: [https://github.com/mimikgit/edgeSDK/releases](https://github.com/mimikgit/edgeSDK/releases). Select the artifact relevant to your development environment and the run the setup executable or uncompress the `.tar` file, depending on the targeted operating system.

### Installing the Mimik Edge Engine

After you have the Edge SDK installed, you need to get the Edge Engine up and running. You can find the instructions for installing and running the version of the Mimik Edge Engine that is appropriate to your development machine at this URL: [https://developer.mimik.com/installation-guide/](https://developer.mimik.com/installation-guide/).

### Installing Mimik Edge CLI Tool

Once the Mimik Edge SDK and Mimik Edge Engine are installed, execute the following command to install the Mimik Edge CLI Tool.

`npm install -g @mimik/mimik-edge-cli`

### Creating an Edge Access Token and binding it to your account

The last thing you'll need to to is create an Edge Access Token and bind it to your Mimik account using the Edge CLI Tool.

You'll find the instuctions for creating an Edge Access Token and binding it to your Mimik account at this URL: [https://developer.mimik.com/development-setup/](https://developer.mimik.com/development-setup/).

Once all the prerequisites are satisfied you are ready to create the `starter-microservice`.

## Build Process

The following steps will install the Node.js packages needed to create the the `starter-microservice`, build the microservice and then package it up in to a `.tar` file.

Clone this repository onto your development machines. 

`git clone https://github.com/reselbob/starter-microservice.git`

Navigate into the newly cloned directory:

`cd starter-microservice`

Then run the following three steps:

1. Install dependencies: `npm install`
2. Run the build script: `npm run build`
3. Package to container: `npm run package`

When you `package` the code for the `starter-microservice`, you'll get output similar to the following:

```
output: .generated-9vcmev9z77/repositories
output: .generated-9vcmev9z77/c9ebbb58695b4894964f67558e9aabad2bbf21bb542a9798e0453179bc139a3b/json
output: .generated-9vcmev9z77/c9ebbb58695b4894964f67558e9aabad2bbf21bb542a9798e0453179bc139a3b/VERSION
output: layer.tar
output: .generated-9vcmev9z77/bef09a33c835239d7cd812ccfc7b6a1a718126f4bc09cc596abdf5080b3ae364.json
output: .generated-9vcmev9z77/manifest.json
output: ./build/microservice-v1-1.0.0.tar

```
Pay special attention to the location of the generated `.tar` file for the `starter-microservice`, in this case...

`./build/microservice-v1-1.0.0.tar`

...you're going to use it.

The build script, `default.yml` is located in the `config` directory found [here](./config/default.yml).

## Deploying the `starter-microservice`


For **mobile application development**, deployment is done programmatically using **Android or iOS Wrappers**. The following links describe mobile deployment in detail:

- Android: [https://developer.mimik.com/edgemobileclient-android-wrapper/](https://developer.mimik.com/edgemobileclient-android-wrapper/)
- iOS: [https://developer.mimik.com/edgemobileclient-ios-wrapper/](https://developer.mimik.com/edgemobileclient-ios-wrapper/)

For **microservice development** on your local machine, run the following command is the same directory of the `.tar` file into which you compressed the `starter-microservice`.

```
mimik-edge-cli image deploy --image={YOUR_IMAGE_PATH} --token={EDGE_ACCESS_TOKEN}

```

**WHERE**

* `{YOUR_IMAGE_PATH}` is the location of the generated `.tar` file creted previously
* `{EDGE_ACCESS_TOKEN}` is the Edge Access Token that created previously in the section, **[Creating an Edge Access Token and binding it to your account](#creating-an-edge-access-token-and-binding-it-to-your-account)** above.

For example:

```
mimik-edge-cli image deploy \
  --image=build/microservice-v1-1.0.0.tar \
  --token=xxxiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODE0MzA0ODA1MTkyNjAxNjAwIiwianRpIjoiaXBqS25DelJvaWN0dE5tR1FkVEVsZW5URn52VFxxxxxZCI6ImJiNmZiYTdkLTYzMjEtNDFjNS1hYzM3LTFhN2E4YTlhNGFjMCIsImF6cCI6IxxxxxxxxxFjNS1hYzM3LTFhN2E4YTlhNGFjMCIsImlzcyI6Imh0dHBzOi8vbWlkLm1pbWlrMzYwLmNvbS9tSUQvdjEvb2F1dGgvdG9rZW4iLCJub2RlX2lkIjoiZDE0YTAyOGMyYTNhMmJjOTQ3NjEwMmJiMjg4MjM0YzQxNWEyYjAxZjgyOGVhNjJXXXXmxxxxxxxxxx1pbWlrMzYwLmNvbS9tU1QvdjEvY2xpZW50cy9HZW5lcmljLWVkZ2UiXSwic2NvcGUiOiJvcGVuaWQgZWRnZTptY20gZWRnZTpjbHVzdGVycyBlZGdlOmFjY291bnQ6YXNzb2NpYXRlIGVkZ2U6YWNjb3VudDp1bmFzc29jaWF0ZSBlZGdlOnJlYWQ6YWNjb3VudGtleSIsImlhdCI6MTYyMDMzNzMwNCwiZXhwIjoxNjM1ODg5MzA0fQ.0IxkfUOWJ1fJJTZTBcxxxxxxxxx

```

Once microservice is successfully deployed you should get a response that looks like this:

```
created: 1620339054
digest:  sha265:c8144df432f2c59834bc010be5ecc9764e0eda73d4d3fa036c34c4822684c707
id:      bb6fba7d-6321-41c5-ac37-1a7a8a9a4ac0-microservice-v1
name:    microservice-v1
size:    75206
status:  successfully deployed

```

Now open `start.json` the source code working directory, `starter-microservice`

`v1 start.json`

You'll see the following:

```
{
  "name": "{{containerName}}",
  "image": "{{imageName}}",
  "env": {
    "MCM.BASE_API_PATH": "{{YOUR_PATH}}",
    "MCM.WEBSOCKET_SUPPORT": "true",
    "<add your environment variable name>": "{{add your environment variable}}"
  }
}

```

Make substitutions in the file, `start.json` according the to out from the output shown above.

* Replace `{{imageName}}` with the `name` from the output, in this case: `microservice-v1`
* Replace `{{containerName}}` with the filename of the `.tar` file generated during the deployment process, in this case, `microservice-v1-1.0.0.tar`.
* Replace {{YOUR_PATH}} with a path of your choosing that will be appended to the host name for form the URL by which you will access the `starter-microservice`. We recommend keeping it simple, for example:

```
"MCM.BASE_API_PATH": "sample/v1",
```
The JSON below shows an example of configurations settings for `start.json`:

```
{
  "name": "microservice-v1-1.0.0.tar",
  "image": "microservice-v1",
  "env": {
    "MCM.BASE_API_PATH": "/sample/v1",
    "MCM.WEBSOCKET_SUPPORT": "true"
  }
}
```

OPTIONAL:
You can edit "add your environment variable name": "{{add your environment variable}}" to anything of your choosing related to your development environment. If you just want to get started for now, you can remove this line from start.json Read the source code for more information on custom environment variables.

Save the newly updated start.json file

Navigate to where the `start.json `file is located via terminal then run the following command to invoke `starter-microservice`:

```
mimik-edge-cli container deploy --payload start.json --token={EDGE_ACCESS_TOKEN}

```

In this case, 

```
mimik-edge-cli container deploy --payload start.json \
--token=xxxiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODE0MzA0ODA1MTkyNjAxNjAwIiwianRpIjoiaXBqS25DelJvaWN0dE5tR1FkVEVsZW5URn52VFxxxxxZCI6ImJiNmZiYTdkLTYzMjEtNDFjNS1hYzM3LTFhN2E4YTlhNGFjMCIsImF6cCI6IxxxxxxxxxFjNS1hYzM3LTFhN2E4YTlhNGFjMCIsImlzcyI6Imh0dHBzOi8vbWlkLm1pbWlrMzYwLmNvbS9tSUQvdjEvb2F1dGgvdG9rZW4iLCJub2RlX2lkIjoiZDE0YTAyOGMyYTNhMmJjOTQ3NjEwMmJiMjg4MjM0YzQxNWEyYjAxZjgyOGVhNjJXXXXmxxxxxxxxxx1pbWlrMzYwLmNvbS9tU1QvdjEvY2xpZW50cy9HZW5lcmljLWVkZ2UiXSwic2NvcGUiOiJvcGVuaWQgZWRnZTptY20gZWRnZTpjbHVzdGVycyBlZGdlOmFjY291bnQ6YXNzb2NpYXRlIGVkZ2U6YWNjb3VudDp1bmFzc29jaWF0ZSBlZGdlOnJlYWQ6YWNjb3VudGtleSIsImlhdCI6MTYyMDMzNzMwNCwiZXhwIjoxNjM1ODg5MzA0fQ.0IxkfUOWJ1fJJTZTBcxxxxxxxxx

```

You'll get output similar to the following:

```
created: 1620341668342
env: 
  MCM.BASE_API_PATH:     /bb6fba7d-6321-41c5-ac37-1a7a8a9a4ac0/sample/v1
  MCM.WEBSOCKET_SUPPORT: true
id:      bb6fba7d-6321-41c5-ac37-1a7a8a9a4ac0-microservice-v1-1.0.0.tar
image:   microservice-v1
imageId: bb6fba7d-6321-41c5-ac37-1a7a8a9a4ac0-microservice-v1
name:    microservice-v1-1.0.0.tar
state:   started

```

To call the microservice, use the following format:

`curl http://localhost:8083/< MCM.BASE_API_PATH>/`

**WHERE**

`< MCM.BASE_API_PATH>` is the value resported in the response returned when you invoked the `starter-microservice` shown above previously. In this case the value is: `/bb6fba7d-6321-41c5-ac37-1a7a8a9a4ac0/sample/v1` 

Thus, to exercise the microservice, exe ut the following command: 


`curl http://localhost:8083/bb6fba7d-6321-41c5-ac37-1a7a8a9a4ac0/sample/v1`

You'll get out as follows:

```
TO BE PROVIDED
```


For more information and explanation, you can visit our [mCM container management API references](https://developer.mimik.com/edgeengine-mcm-api/) and [general guide on packaging, deployment, and exporting microservice](https://developer.mimik.com/building-edge-microservices/).
