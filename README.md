# Serverless IoT Event

This example demonstrates how to setup a AWS IoT Rule to send events to a Lambda function. The Lambda Function receives it from one topic(iotbutton/001) and forward it to another topic(iotbutton/002).

## 1. Setup
### 1-1. AWS credential configure
* ```$ aws configure --profile default```
* Make sure you have the specified profile which is used in serverless.yml
* ```$ cat ~/.aws/credentials```

### 1-2. Change Region in serverless.yml
```
provider:
  name: aws
  runtime: nodejs6.10
  region: <your-region>
  ...
```

### 1-3. Deployment
```
$ serverless deploy
```

## 2. Usage
### 2-1. Option 1:Check the CloudWatch log

### 2-2. Option 2:Play with AWS IoT MQTT client

![AWS IoT MQTT client](https://console.aws.amazon.com/iotv2/home#/test)

### 2-3. Option 2:Play with AWS IoT MQTT client - Angular Service

![AWS IoT MQTT client library with Angular](https://github.com/komushi/ng-awsmqtt)