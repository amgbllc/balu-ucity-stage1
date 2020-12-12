import AWS = require('aws-sdk');
//import aws = require('aws-sdk');
import { config } from './config/config';
import fs = require('fs');
const c = config.dev;

//Configure AWS
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
const S3 = new AWS.S3();


export const s3Proxy = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  params: { Bucket: c.aws_media_bucket }
});

// export const s3Details = new AWS.S3();

export function getAWSConfiguration() {

  AWS.config.update({
    accessKeyId: c.aws_access_key,
    secretAccessKey: c.aws_secret_key,
    region: c.aws_region
  })

}



