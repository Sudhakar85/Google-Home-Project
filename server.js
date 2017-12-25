var express = require('express');
var app = express();

app.get('/', function (req, res) {

  res.send('Hello World!');
  
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    
app.listen(port, ip);

console.log('Server running on http://%s:%s', ip, port);

