'use strict';

const AWS = require('aws-sdk');

const iot = new AWS.Iot({apiVersion: '2015-05-28'});

let getEndpointPromise = () => new Promise((resolve, reject) => {
	iot.describeEndpoint({}, (err, data) => {
	  if (err) {
	  	console.log(err, err.stack); // an error occurred

	  	reject(err);

	  } else {
			console.log(data);           // successful response

			resolve(data.endpointAddress)
	  }
	});
});

module.exports.forward = (event, context, callback) => {

	console.log("event: " + event);

	getEndpointPromise().then((endpoint) => {
		// get the endpoint and initialize the IoTData Service
		let iotdata = new AWS.IotData({endpoint: endpoint});
		console.log(iotdata);

		// forward the input event data to another topic
		let params = {
		  topic: 'iotbutton/002', /* required */
		  payload: 'received and forward:' + event,
		  qos: 0
		};

		iotdata.publish(params, (err, data) => {
		  if (err) {
		  	console.log(err, err.stack); // an error occurred
		  } else {
		  	console.log(data);           // successful response
	  	}
		});
	});

  callback(null, {});
};
