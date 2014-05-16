import startApp from 'ember-example/tests/helpers/start-app';

var App;

module('Book list', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should show book list', function() {
  visit('/').then(function() {
    click("a:contains('Books')").then(function() {
      equal(find('h3').text(), 'Books');
    });
  });
});

test('Should show book titles', function() {
  visit('/books').then(function() {
    equal(find('li:contains("Object-Oriented")').length, 1);
  });
});
