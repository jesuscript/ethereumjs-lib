const crypto = require('crypto'),
  bignum = require('bignum');

const sha256 = crypto.createHash('SHA256');
  ripemd160 = crypto.createHash('RSA-RIPEMD160');

module.exports = function(opts) {
  var results;

console.log('to: ', opts.to, 'data: ', opts.data)

  var to = bignum.fromBuffer(opts.to);

  if (to.eq(2)) {
    results = {
    };
    results.gasUsed = 100;
    var hashStr = sha256.update(opts.data).digest('hex');
    results.returnValue = new Buffer(hashStr, 'hex');
  }
  else if (to.eq(3)) {
    results = {
    };
    results.gasUsed = 100;
    var hashStr = ripemd160.update(opts.data).digest('hex');
    results.returnValue = new Buffer(hashStr, 'hex');
  }
  else {
    results = false;
  }

console.log('results: ', results)

  return results;
}
