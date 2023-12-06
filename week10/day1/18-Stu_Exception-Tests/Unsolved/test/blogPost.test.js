const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  it('throws error when authorName is less than 2 characters long', () => {
    expect(() => {
      const blogPost = new BlogPost("j");
    }).toThrow('Author must be at least 2 characters long.');
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.

    it('throws error when authorName does not contain uppercase  lowercase, numbers, dashes, and underscores.', () => {
      expect(() => {
        const blogPost = new BlogPost("John-_Doe123!");
      }).toThrow('Author must only contain letters, numbers, dashes, and underscores.');
    })
});
