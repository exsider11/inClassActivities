const express=require("express");
const path=require("path");
//const fs=require("fs");
const app=express();

//app.use(express.static("public"));
//this allows files to be read dirctly in the website address of the browser from the folder mentioned


//req: request object, contains info about request
//res: response object, allows yyou to respond
app.get("",(req, res)=>{
    res.send("hello express!!!"); 
    // this is what gets sent to the server(can be straight html code)

    //const html=fs.readFileSync("./filename.html")
    //res.send(html)
    //do this if you want to send a file instead of raw code

    //res.sendFile(path.join(__dirname,"./index,html"))
    //another way to link a file using path
})

app.listen(3001,()=>{
    console.log("server listening port 3001")
});