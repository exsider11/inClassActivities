// TODO: Import your Header, TaskList, and TaskListItem

class Component{
  constructor(Header, TaskList, TaskListItems){
  }
  render() {
    throw new Error(`Child class must implement render() method.`);
  }
  renderInnerHTML(){
    
  }
}

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  // TODO: Create new TaskListItems from the provided tasks
  var length = tasks.length;
  var TaskListItems = "";
  var yesNo = "";
  for(i = 0; i < length;i++){
    const {text, priority} = tasks[i];
    TaskListItems = TaskListItems+"<h2>"+text+" "+priority+"</h2>\n"
  }
  
  
  // TODO: Add TaskListItems to a new TaskList

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>YOUR TITLE HERE</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        <h1>${title}</h1>
        ${TaskListItems}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
