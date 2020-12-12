
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    region: process.env.aws_region,
    masterKey: process.env.aws_profile,
    port: process.env.PORT
  
  };