Tinytest.add('nacl - randomBytes', function(t) {
  var set = {}, s, i;
  for (i = 0; i < 10000; i++) {
    s = nacl.util.encodeBase64(nacl.randomBytes(32));
    if (set[s]) {
      t.isFalse("duplicate random sequence! ", s);
      return;
    }
    set[s] = true;
  }
  //????
  t.isTrue('no collisions');
});
