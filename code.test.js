const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');



assert(Math.abs(e(0) - 1) < 1e-10);
assert(Math.abs(e(1) - 2) < 1e-10);
assert(Math.abs(e(5) - 2.7166666666666663) < 1e-10);
assert(Math.abs(e(10) - 2.7182818011463845) < 1e-10);
