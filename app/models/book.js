var Book = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  amazonLink: DS.attr('string'),
  image: DS.attr('string')
});

Book.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Practical Object-Oriented Design in Ruby',
      author: 'Sandi Metz',
      amazonLink: 'http://www.amazon.com/dp/0321721330/',
      image: '/images/book1.jpg'
    },
    {
      id: 2,
      title: 'The Well-Grounded Rubyist',
      author: 'David A. Black',
      amazonLink: 'http://www.amazon.com/dp/1617291692/',
      image: 'images/book1.jpg'
    },
    {
      id: 3,
      title: 'Crafting Rails 4 Applications',
      author: 'Jose Valim',
      amazonLink: 'http://www.amazon.com/dp/B00I9GR0E6/',
      image: 'images/book1.jpg'
    }
  ]
});

export default Book;
