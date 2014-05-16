var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('books', function() {
    this.route('show', { path: ':book_id' });
  });
});

export default Router;
