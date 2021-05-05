# starter-microservice

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

You'll find the instuctions for creating an Edge Access Token and binding it to your Mimik account at this URL:[https://developer.mimik.com/development-setup/](https://developer.mimik.com/development-setup/).

Once all the prerequisites are satisfied you are ready to create the `starter-microservice`.

## Build Process

The following steps will install the Node.js packages needed to create the the `starter-microservice`, build the microservice and then package it up in to a `.tar` file.

1. Install dependencies: `npm install`
2. Run the build script: `npm run build`
3. Package to container: `npm run package`

The build script, `default.yml` is located in the `config` directory found [here](./config/default.yml).

## Deploying the `starter-microservice`

[THE FOLLOWING MIGHT NEED TO BE REFACTORED]

For **mobile application development**, deployment is programmatically by **Android or iOS Wrappers**, learn more about it:

- Android: [Link](https://developer.mimik.com/edgemobileclient-android-wrapper/)
- iOS: [Link](https://developer.mimik.com/edgemobileclient-ios-wrapper/)

For **microservice development**, things you will need:

- edgeSDK running on the deployment targeted device.
- Obtained edge Acess Token and associate the device from [mimik-edge-cli](https://www.npmjs.com/package/@mimik/mimik-edge-cli).
- Run the following commands under the same directory of your containerized microservice file using mimik-edge-cli:

```
mimik-edge-cli image deploy --image={YOUR_IMAGE_PATH} --token={EDGE_ACCESS_TOKEN}
```

Once microservice is successfully deployed you should get a response that looks like this:

```
created: 1617907116
digest:  sha265:e38a0314ea4bca42802bbc315637d9db9251158494e85ece4c0d789e2ab0b191
id:      79279c04-8945-4141-8b52-2cb92b78cf43-microservice-v1
name:    microservice-v1
size:    75855
status:  successfully deployed
```

Now open start.json in editor of choice. It can be found in the repo.

copy the name of the microservice that you got in the response when you deployed the image.

replace {{imageName}} with the name you copied.

replace {{containerName}} with the name you copied.

replace {{YOUR_PATH}} with a path of your choosing. we recommend keeping it simple.
for example:

```
"MCM.BASE_API_PATH": "sample/v1",
```

OPTIONAL:
You can edit "add your environment variable name": "{{add your environment variable}}" to anything of your choosing related to your development environment. If you just want to get started for now, you can remove this line from start.json Read the source code for more information on custom environment variables.

save the newly updated start.json file

navigate to where the start.json file is located via terminal

run command:

```
mimik-edge-cli container deploy --payload start.json --token={EDGE_ACCESS_TOKEN}
```

- For more information and explanation, you can visit our [mCM container management API references](https://developer.mimik.com/edgeengine-mcm-api/) and [general guide on packaging, deployment, and exporting microservice](https://developer.mimik.com/building-edge-microservices/).
