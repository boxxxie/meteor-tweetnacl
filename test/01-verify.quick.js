Tinytest.add('nacl - verify', function(t) {
  t.isTrue(nacl.verify(new Uint8Array(1), new Uint8Array(1)), 'equal arrays of length 1 should verify');
  t.isTrue(nacl.verify(new Uint8Array(1000), new Uint8Array(1000)), 'equal arrays of length 1000 should verify');
  var a = new Uint8Array(764), b = new Uint8Array(764);
  for (i = 0; i < a.length; i++) {
    a[i] = b[i] = i & 0xff;
  }
  t.isTrue(nacl.verify(a, b), 'equal arrays should verify');
  t.isTrue(nacl.verify(a, a), 'same arrays should verify');
  b[0] = 255;
  t.isFalse(nacl.verify(a, b), 'different arrays don\'t verify');
  t.isFalse(nacl.verify(new Uint8Array(1), new Uint8Array(10)), 'arrays of different lengths should not verify');
  t.isFalse(nacl.verify(new Uint8Array(0), new Uint8Array(0)), 'zero-length arrays should not verify');
});
