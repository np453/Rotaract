// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region 
AWS.config.update({region: 'REGION'});

// Create the promise and SES service object
var deletePromise = new AWS.SES({apiVersion: '2010-12-01'}).deleteIdentity({Identity: "DOMAIN_NAME"}).promise();

// Handle promise's fulfilled/rejected states
deletePromise.then(
  function(data) {
    console.log("Identity Deleted");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });