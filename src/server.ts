import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { getObjectFromS3, getSignedUrl } from './aws';
import { config } from './config/config';
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
import feedRoutes   from './routes/feeditem/feed.routes' ;

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.use('/',feedRoutes);


  // app.post('/api/v0/getSignedUrl1', upload.single('file'), (req, res) => {
  //   if (!req.file) {
  //     console.log("No file received");
  //     return res.send({
  //       success: false
  //     });
  
  //   } else {
  //     console.log('file received');
  //     //console.log(res.download('/'));

  //     res.download(req.file.originalname);
  //     return res.send({
  //       success: true
  //     })
  //   }
  // });

  // app.post('/api/v0/getSignedUrl1', function (req, res, next) {
  //   //console.log(req.file);

  //   const documentFile  = (req as unknown as MulterRequest).file;
  //   console.log("balu"+documentFile);
  //   // req.files is array of `photos` files
  //   // req.body will contain the text fields, if there were any
  // })

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  // app.get( "/", async ( req, res ) => {
  //   res.send("try GET /filteredimage?image_url={{}}")
  // } );

//   app.use('/api/v0/get_signed_url', (req, res, next) => {

//     let s3 = new aws.S3();
// s3.config.update({
//     accessKeyId: config.dev.aws_access_key,
//     secretAccessKey: config.dev.aws_secret_key,
//     region: config.dev.aws_region
// })
//     let params = {
//         Bucket: 'baluudacity11',
//         Key: 'butterfly.jfif',
//     };

//     req.params = params;

//     s3.getSignedUrl('putObject', params, function (err, signedUrl) {
//         if (err) {
//             console.log(err);
//             return next(err);
//         }
//         else {
//             return res.json({
//                 postUrl: signedUrl,
//                 getUrl: signedUrl.split("?")[0]
//             })
//         }
//     });

//     //res.status(201).send({ url: url });
// })
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();


interface MulterRequest extends Request {
  file: any;
}