'use strict';
const fs = require('fs');

const text = fs.readFileSync('script.js', 'utf8');
console.log(text);