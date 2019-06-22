//Install express server    
const express = require('express');

const path = require('path');   

const app = express();   

app.use('./dist', express.static(path.join(__dirname, '/')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 8080);