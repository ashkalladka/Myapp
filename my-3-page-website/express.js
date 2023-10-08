const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const options = {
  key: fs.readFileSync('/etc/ssl/your_domain/Ashwini.pfx'),
  cert: fs.readFileSync('/etc/ssl/your_domain/Ashwini.crt'),
  // Include the following line if you have an intermediate certificate:
  ca: fs.readFileSync('/etc/ssl/your_domain/RootAsh.crt'),
};

const httpsServer = https.createServer(options, app);

// Your Express routes and middleware go here

httpsServer.listen(port, () => {
  console.log(`Server is running on https://your_domain.com:${port}`);
});
