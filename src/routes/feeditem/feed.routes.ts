

//import AWS from 'aws-sdk';
//var aws = require('aws-sdk');


//const axios = require('axios');

//import FormData = require('form-data');
//import fs = require('fs');
//import { config } from '../../../src/config/config';
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
// var multerS3 = require('multer-s3');


import express from 'express';
const feedRoutes =express.Router();

var feedControllerProxy=require('../../controllers/feedcontroller/feedController');

feedRoutes.post('/api/v0/getSignedUrl',feedControllerProxy.getImageBySignedUrl , (req, res) => {
   
});

feedRoutes.post('/api/v0/postImage',feedControllerProxy.postImage , (req, res) => {
  
  console.log("dasdsd"+res);
  console.log("1234"+res);
});

feedRoutes.post('/api/v0/deleteimage',feedControllerProxy.deleteImage , (req, res) => {
  
  console.log("dasdsd"+res);
  console.log("1234"+res);
});

export default  feedRoutes;