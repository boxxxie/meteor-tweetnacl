Package.describe({
  name: 'boxxxie:tweetnacl',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'git@github.com:boxxxie/meteor-tweetnacl.git',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.addFiles([
    'nacl.js'
  ], ['server', 'client']);

  api.export('nacl');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boxxxie:tweetnacl');
  api.addFiles('boxxxie:tweetnacl-tests.js');
});
