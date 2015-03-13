Package.describe({
  name: 'boxxxie:tweetnacl',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'git@github.com:boxxxie/meteor-tweetnacl.git',
  // URL to the Git repository containing the source code for this package.
  git: 'https://atmospherejs.com/boxxxie/tweetnacl',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.addFiles("client/compatibility/client.js", 'client');
  api.addFiles("server/server.js", 'server');

  api.export('nacl');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boxxxie:tweetnacl');

  api.addFiles([
    'test/data/base64.random.js',
    'test/data/onetimeauth.spec.js',
    'test/data/secretbox.random.js',
    'test/data/sign.spec.js',
    'test/data/scalarmult.random.js',
    'test/data/hash.random.js',
    'test/data/sign.spec.js'
  ], ['client', 'server']);

  api.addFiles([
    'test/00-api.js',
    'test/00-utils.js',
    'test/01-verify.quick.js',
    'test/02-randombytes.quick.js',
    'test/03-onetimeauth.quick.js',
    'test/04-secretbox.js',
    'test/04-secretbox.quick.js',
    'test/05-scalarmult.js',
    'test/07-hash.js',
    'test/08-sign.js'
  ], ['client', 'server']);
});

Npm.depends({
  "tweetnacl" : "0.13.0"
});
