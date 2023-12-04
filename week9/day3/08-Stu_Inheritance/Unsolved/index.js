// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem{
  constructor(authorName,text,createdOn){
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends  ForumItem{
  constructor(authorName, title, text, createdOn) {
    super(authorName,text,createdOn)
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment  extends ForumItem{
  constructor(authorName, text, createdOn, reaction) {
    super(authorName,text,createdOn)
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.

const comment=new Comment("john doe", "comment Text", "11/30/2023", "wow this is a comment!")

// TODO: Create a new object using the BlogPost class constructor.

const blogPost = new BlogPost("jane doe", "blogTitle", "blogContent","11/30/2023")

// TODO: Log both newly created BlogPost and Comment to the console.

blogPost.addComment(comment)

console.log(`This blog was made by ${blogPost.authorName} has comments made by ${comment.authorName}`)