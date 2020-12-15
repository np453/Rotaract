// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region 
AWS.config.update({region: 'REGION'});

// Create promise and SES service object
var verifyEmailPromise = new AWS.SES({apiVersion: '2010-12-01'}).verifyEmailIdentity({EmailAddress: "ADDRESS@DOMAIN.EXT"}).promise();

// Handle promise's fulfilled/rejected states
verifyEmailPromise.then(
  function(data) {
    console.log("Email verification initiated");
   }).catch(
    function(err) {
    console.error(err, err.stack);
  });