//I know this test seems unnecessary, but its just for PoC

const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('k8s/base/index.html', 'utf8');

assert.ok(html.includes('<h1>'), 'index.html must contain an <h1> header');
console.log('PASS: index.html has an <h1> header');