// Load in required JS modules
var express = require('express'),
    path = require('path'),
    http = require('http'),
    dbfunctions = require('./public/js/dbfunctions');

// Create a new instance of express
var app = express();

// Configure express
app.configure(function () {
	// Set the port
    app.set('port', 5000);
    // Set dev mode logging
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    // Use the bodyParser to parse body response text
    app.use(express.bodyParser()),
    // Configure static file serving (__dirname is current directory of this file)
    app.use(express.static(path.join(__dirname, 'public')));
});

// Define routes and methods to call when visited
app.get('/albums', dbfunctions.findAll);
app.get('/albums/:id', dbfunctions.findById);
app.post('/albums', dbfunctions.addAlbum);
app.put('/albums/:id', dbfunctions.updateAlbum);
app.delete('/albums/:id', dbfunctions.deleteAlbum);

// Create a new http server, listen on the defined port
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
