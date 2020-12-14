
import { filterImageFromURL, deleteLocalFiles } from '../../util/util';

const { endpoint, masterKey, port } = require('../../server-env');
import fs from 'fs';
import aws = require('aws-sdk');

import AWS from 'aws-sdk';
const s3 = new AWS.S3();
import { getAWSConfiguration } from '../../aws';

const axios = require('axios');
const path = require('path');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var multerS3 = require('multer-s3');

exports.postImage = function (req, res, next) {

	const fileContent = fs.readFileSync('./src/butterfly-4.jpg');//dummy refrence for file content

	fs.readdir('./src/uploadimage', (err, files) => {
		files.forEach(file => {
			console.log(file);
//valid??
			const postParams = {
				Bucket: process.env.aws_media_bucket,
				Key: file,
				Body: fileContent //dummy refrence for file content
			};

			getAWSConfiguration();
			s3.upload(postParams, function (err, data) {
				if (err) {
					console.log('Error Msg', err);
				}
				else {
					console.log('Upload Successfull');
				}
			});


		});
	});

	return res.send({
		success: true
	})
}

exports.deleteImage = function (req, res) {

	//const fileContent = fs.readFileSync('./src/image/butterfly-4.jpg');

	fs.readdir('./src/uploadimage', (err, files) => {
		files.forEach(file => {
			console.log(file);

			getAWSConfiguration();

			const deletParams = {
				Bucket: process.env.aws_media_bucket,
				Key: file,

			};
			s3.deleteObject(deletParams, function (err, data) {
				if (err) {
					console.log('Error Msg:' + err, err.stack);
				}
				else {
					console.log('Delete Successfull');
				}
			});
		})
		return res.send({
			Delete: true
		})
	})
}


exports.getImageBySignedUrl = function (req, res): any {
	upload.single('file')(req, res, () => {
		if (req.file) {
			console.log(req.file.originalname);
			//var thing = req.file;
			let params = {
				Bucket: process.env.aws_media_bucket,
				Key: req.file.originalname,
				Body: '', ContentType: 'image/jpg', ACL: 'public-read',
				Expires: 3600
			};

			s3.getSignedUrl('putObject', params, async function (err, signedUrl) {
				if (err) {
					console.log(err);
					//return next(err);
				}
				else {
					const urlFromaws = signedUrl.split("?")[0];
					const signedUrlFromaws = signedUrl;
					const response = await axios.get(urlFromaws, { responseType: 'arraybuffer' })
					const buffer = Buffer.from(response.data, "utf-8");
					let image = buffer.toString('base64')
					console.log("file read successfully from ---------------------" + "    " + signedUrl + "-----------------");

					require("fs").writeFile("./src/tmp/filtered/" + req.file.originalname, image, 'base64', function (err) {
						console.log(err);
					});

					
					return res.json({

						postUrl: signedUrl,
						getUrl: signedUrl.split("?")[0]
					})
				}

				res.send('getImageUrlSigned Call-export function');


			})
		}
	})
}

function deleteLocalFileAfterReadFromAWS() {

	fs.readdir("./src/tmp/filtered", (err, files) => {
		if (err) throw err;

		for (const file of files) {
			fs.unlink(path.join("./src/tmp/filtered", file), err => {
				if (err) throw err;
			});
		}
	});


}