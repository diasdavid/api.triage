var server = require('./../index.js');

console.log(server.plugins);

var handler = server.plugins['Github-Webhook'].events;

handler.on('*', function (event){
  console.log('SOMETHING: \n', event);
})

handler.on('ping', function (event){
  console.log('PING: \n', event);
})

handler.on('error', function (err) {
  console.err('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})

handler.on('issues', function (event) {
  console.log('Received an issue event for % action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
}) 