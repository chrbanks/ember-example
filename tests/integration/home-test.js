import startApp from 'ember-example/tests/helpers/start-app';

var App;

module('Home Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should show the words Ember.js Example', function() {
  visit('/').then(function() {
    equal(find('h1#title').text(), 'Ember.js Example');
  });
});

test('Should return home when clicking Home link', function() {
  visit('/books').then(function() {
    click("a:contains('Home')").then(function() {
      notEqual(find('h3').text(), 'Books');
    });
  });
});
