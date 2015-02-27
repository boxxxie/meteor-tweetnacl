var enc = nacl.util.encodeBase64,
    dec = nacl.util.decodeBase64;

Tinytest.add('nacl - secretbox - specified vectors - ranndom sample', function(t) {
  _.sample(randomVectors, 100).forEach(function(vec) {
    var key = dec(vec[0]);
    var nonce = dec(vec[1]);
    var msg = dec(vec[2]);
    var goodBox = dec(vec[3]);
    var box = nacl.secretbox(msg, nonce, key);
    t.isTrue(box, 'box should be created');
    t.equal(enc(box), enc(goodBox));
    var openedBox = nacl.secretbox.open(goodBox, nonce, key);
    t.isTrue(openedBox, 'box should open');
    t.equal(enc(openedBox), enc(msg));
  });
});

