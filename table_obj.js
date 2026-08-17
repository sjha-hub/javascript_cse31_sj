let student = [
    {
        name: "Samyara",
        city: "Delhi",
        Cgpa: 9.8           
    },                       //  Comma between objects
    {
        name: "papaya",
        city: "crossing republic",
        Cgpa: 10.0
    },                       //  Comma between objects
    {
        name: "samiksha",
        city: "Delhi",
        Cgpa: 7.8
    },
     {
        name: "jha",
        city: "Delhi",
        Cgpa: 7.8
    }  ,
     {
        name: "dixit",
        city: "Delhi",
        Cgpa: 7.8
    }   

];

console.table(student);
for (let i =0; i<student.length; i++){
    if (student[i].Cgpa>=8){
        console.log(student[i]);
    }
}

console.log('the cost of ${obj.name} is ${obj.price}');