if(Meteor.isServer){
  var enc = nacl.util.encodeBase64;

  Tinytest.add('nacl - lowlevel.crypto_onetimeauth - specified vectors - random sample', function(t) {
    var out = new Uint8Array(16);

    _.sample(onetimeOauthSpecVectors, 100).forEach(function(v) {
      nacl.lowlevel.crypto_onetimeauth(out, 0, v.m, 0, v.m.length, v.k);
      t.equal(enc(out), enc(v.out));
    });
  });

}
