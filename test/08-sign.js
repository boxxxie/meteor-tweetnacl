var enc = nacl.util.encodeBase64,
    dec = nacl.util.decodeBase64;

Tinytest.add('nacl - sign - sign and sign.open - specified vectors - random sample', function(t) {
  _.sample(signVectors, 50).forEach(function(vec) {
    var keys = nacl.sign.keyPair.fromSecretKey(dec(vec[0]));
    var msg = dec(vec[1]);
    var goodSig = dec(vec[2]);

    var signedMsg = nacl.sign(msg, keys.secretKey);
    t.equal(enc(signedMsg.subarray(0, nacl.sign.signatureLength)), enc(goodSig), 'signatures must be equal');
    var openedMsg = nacl.sign.open(signedMsg, keys.publicKey);
    t.equal(enc(openedMsg), enc(msg), 'messages must be equal');
  });
});

Tinytest.add('nacl - sign - sign.detached and sign.detached.verify - some specified vectors', function(t) {
  _.sample(signVectors, 50).forEach(function(vec, i) {
    // We don't need to test all, as internals are already tested above.
    if (i % 100 !== 0) {return;}

    var keys = nacl.sign.keyPair.fromSecretKey(dec(vec[0]));
    var msg = dec(vec[1]);
    var goodSig = dec(vec[2]);

    var sig = nacl.sign.detached(msg, keys.secretKey);
    t.equal(enc(sig), enc(goodSig), 'signatures must be equal');
    var result = nacl.sign.detached.verify(msg, sig, keys.publicKey);
    t.isTrue(result, 'signature must be verified');
  });
});
