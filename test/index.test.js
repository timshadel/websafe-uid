
var websafe = require('../');

describe('websafe.uid(len)', function(){
  it('should generate a uid of the given length', function(){
    var n = 20;
    while (n--) websafe.uid(n).should.have.length(n);
    websafe.uid(10).should.not.equal(websafe.uid(10));
  });
});