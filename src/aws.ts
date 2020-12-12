 import AWS = require('aws-sdk');
import aws = require('aws-sdk');

import fs = require('fs');
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
const s3 = new AWS.S3();


export function getAWSConfiguration(){

  aws.config.setPromisesDependency(Promise);
  aws.config.update({
    accessKeyId: process.env.aws_access_key,
    secretAccessKey: process.env.aws_secret_key,
    region: process.env.aws_region
  });
}





	










//

//Configure AWS



// console.log("endpoint aws" +process.env.aws_region);

// export const s3Proxy = new AWS.S3({
//   signatureVersion: 'v4',
//   region: c.aws_region,
//   params: { Bucket: c.aws_media_bucket },
  
// });

// export const s3Details = new AWS.S3();

// export function getAWSConfiguration() :any{

//   accessKeyId: process.env.aws_access_key
//   secretAccessKey: process.env.aws_secret_key
//   region: process.env.aws_region

//   AWS.config.update({
//     accessKeyId: process.env.aws_access_key,
//     secretAccessKey: process.env.aws_secret_key,
//     region: process.env.aws_region
    
//   })

//   return AWS.config;

// }





