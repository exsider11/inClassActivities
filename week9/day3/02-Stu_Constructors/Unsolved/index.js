// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

function BlogPost(authorName, title, createdOn){
    this.authorName = authorName;
    this.title = title;
    this.createdOn = createdOn;
    this.printMetaData = function(){
        console.log(`Created by ${this.authorName} on ${createdOn}`);
    }
}

const newBlogPost = new BlogPost("Herman Melville", "Moby Dick", "1851")

newBlogPost.printMetaData();

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object
