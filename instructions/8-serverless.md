# Build An Alexa Hello World Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

## Setup w/ Serverless Framework

### About
This readme assumes you have your developer environment ready to go and that you have some familiarity with CLI (Command Line Interface) Tools, [AWS](https://aws.amazon.com/), and the [ASK Developer Portal](https://developer.amazon.com/alexa-skills-kit?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=hello-world-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_hello-world-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs). If not, [click here](./1-voice-user-interface.md) for a more detailed walkthrough.

### Pre-requisites

* Node.js (> v8)
* Register for an [AWS Account](https://aws.amazon.com/)
* Register for an [Amazon Developer Account](https://developer.amazon.com?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=hello-world-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_hello-world-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)
* Install and Setup [Serverless Framework](https://serverless.com/framework/docs/getting-started/)

### Installation
1. **Make sure** you are running the latest version of Serverless

	```bash
	$ npm update -g serverless
	```

2. **Install** from the repository.

	```bash
	$ serverless install -u https://github.com/jnicho02/skill-sample-nodejs-hello-world/tree/master -n [your_project_name]
	```

4. Install npm dependencies by navigating into the `/lambda/custom` directory and running the npm command: `npm install --save`

	```bash
	$ cd [your_project_name]/lambda/custom
	$ npm install
	```

### Deployment

Serverless **will create the skill, the lambda function, and IAM roles for you**. The Lambda function will be created in ```us-east-1 (Northern Virginia)``` by default.

1. Navigate to the project's root directory. you should see a file named 'skill.json' there.
2. Deploy the skill and the lambda function in one step by running the following command:

	```bash
	$ sls deploy
	```

### Testing

1. To test, login to Alexa Developer Console and **enable the "Test" switch on your skill from the "Test" Tab**.

2. Simulate verbal interaction with your skill through the console using the following example:

	```txt
	 start Hello World
	 hello
	 ```

3. Once the "Test" switch is enabled, your skill can be tested on devices associated with the developer account as well. Speak to Alexa from any enabled device, from your browser at [echosim.io](https://echosim.io/welcome), or through your Amazon Mobile App and say :

	```text
	Alexa, start hello world
	```
## Customization

1. ```./skill.json```

   Change the skill name, example phrase, icons, testing instructions etc ...

   Remember than many information are locale-specific and must be changed for each locale (e.g. en-US, en-GB, de-DE, etc.)

   See the Skill [Manifest Documentation](https://developer.amazon.com/docs/smapi/skill-manifest.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=hello-world-nodejs-V2_CLI-3&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_hello-world-nodejs-V2_CLI-3_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) for more information.

2. ```./lambda/custom/index.js```

   Modify messages, and data from the source code to customize the skill.

3. ```./models/*.json```

	Change the model definition to replace the invocation name and the sample phrase for each intent.  Repeat the operation for each locale you are planning to support.

4. Remember to re-deploy your skill and lambda function for your changes to take effect.

	```bash
	$ ask deploy
	```
