const punycode = require('punycode');
const express = require('express');
const app = express();

const domain = 'example.com';
const punycodeDomain = punycode.encode(domain);
console.log(punycodeDomain); // Output: "xn--example-of-domain-name-com"

const decodedDomain = punycode.decode(punycodeDomain);
console.log(decodedDomain); // Output: "example.com"

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
