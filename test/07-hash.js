var enc = nacl.util.encodeBase64,
    dec = nacl.util.decodeBase64;

Tinytest.add('nacl - hash - random sample', function(t) {
  _.sample(hashRandomVector, 100).forEach(function(vec) {
    var msg = dec(vec[0]);
    var goodHash = dec(vec[1]);
    var hash = nacl.hash(msg);
    t.equal(enc(hash), enc(goodHash));
  });
});
