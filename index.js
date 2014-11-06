var express = require('express');
var app = express()


app.get('/', function(req, res)
{
	var d = new Date();
	console.log('[' + d.getHours() + ':' + d.getMinutes() + '] ' + req.query.echo);
	res.send(req.query.echo);
})

var server = app.listen(5000, function()
{
	var host = server.address().address
	var port = server.address().port

	console.log('Listening at http://%s:%s', host, port);
})
