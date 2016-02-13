console.log('start');

exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function(record) {
        payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        console.log('Decoded payload:', payload);
    });
    context.succeed();
};