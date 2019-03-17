var app = require('./config/server')

var server = app.listen(3200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
})

server.on('listening',function(){
    console.log('ok, server is running');
});


