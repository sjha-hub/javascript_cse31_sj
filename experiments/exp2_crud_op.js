 //CRUD operations - Create Read Update Delete

 //1. Import fs- file system module in your program 
 const fs=require("fs"); //we imported 
// 2. Create file and also write some content in the file
fs.writeFile("student.txt","hello this is for students",(err)=>{

    if (err){
        console.log(err);

    }
    else{
        console.log("File successfully created");
    }
});

//what is arrow function syntax- paraenthesis arrow curly bracktes (parameter)=>{}

fs.readFile("student.txt", "utf-8", (err,data)=>{
    if (err){
        console.log("err");
    }
    else{
        console.log("Content of file ");
        console.log(data);
    }

});

//comment out write op if err 

update a file using appendFile  method, it will only add extra content in already existed file
fs.appendFile("student.txt", " This is the file for CSE II year", (err)=>{
    if (err) throw err 
    else{
        console.log("File successfully updated");
    }
});

delete

fs.unlink("student.txt", (err)=>{
    if (err) throw err
    else{
        console.log("File successfully deleted");

    }

});

