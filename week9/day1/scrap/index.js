const fs=require("fs");
fs.writeFile("./test.txt", "Hello Wordl From Node!",(err)=>{ // (name of file, content of file, error varaible)
    if(err){
        console.log(err)
    }

    else{
        console.log("file written succesfull!")
        }
    
})

fs.readFile("./test.txt","utf-8",(err,data)=>{ //(name of file, paramaeters to read, error variable and data read variable)
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

const example=require("./example");

example.sayHi();
console.log(example.Pi)