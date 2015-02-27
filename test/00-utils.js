Tinytest.add('nacl - utils - nacl.util.encodeBase64 - test vectors - random sample', function(t) {
  _.sample(b64Vectors, 25).forEach(function(vec) {
    var b = new Uint8Array(vec[0]);
    var s = vec[1];
    t.equal(nacl.util.encodeBase64(b), s);
    t.equal(nacl.util.decodeBase64(s), b);
  });
});

