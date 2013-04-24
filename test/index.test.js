
var websafe = require('../')
  , expect = require('expect.js');

describe('websafe.uid(len)', function(){
  it('should generate a uid of the given length', function(){
    var n = 20;
    while (n--) expect(websafe.uid(n)).to.have.length(n);
    expect(websafe.uid(10)).not.to.equal(websafe.uid(10));
  });
});