//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory 
app.use(express.static('./dist/whole-new-world-login-employee'));

app.get('/*', (req,res) => 
    res.sendFile('index.html', {root: 'dist/whole-new-world-login-employee/'}),
);


app.listen(process.env.PORT || 8080);

