import AWS = require('aws-sdk');
//import aws = require('aws-sdk');
import { config } from './config/config';
import fs = require('fs');

require('dotenv').config();
const c = config.dev;

const { region, masterKey, port } = require('./server-env');
//Configure AWS
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
const S3 = new AWS.S3();

console.log("endpoint aws" +process.env.aws_region);

export const s3Proxy = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  params: { Bucket: c.aws_media_bucket }
});

// export const s3Details = new AWS.S3();

export function getAWSConfiguration() :any{

  

  AWS.config.update({
    accessKeyId: c.aws_access_key,
    secretAccessKey: c.aws_secret_key,
    region: region,

  })

  return AWS.config;

}



