// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region 
AWS.config.update({region: 'REGION'});

// Create the promise and SES service object
var verifyDomainPromise = new AWS.SES({apiVersion: '2010-12-01'}).verifyDomainIdentity({Domain: "DOMAIN_NAME"}).promise();

// Handle promise's fulfilled/rejected states
verifyDomainPromise.then(
  function(data) {
    console.log("Verification Token: " + data.VerificationToken);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });