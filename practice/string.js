let a = "wassup ppl"
let count1 = 0
//1. 
for (let i=0; i<a.length; i++){
    count1++
}

console.log("length of the array displayed using for loop", count1)

//2.
let count=0
while(a[count]!=undefined){
    count++
}

console.log("length of the array displayed using while loop terminates at undefined", count)

//3. 
console.log("length of the array display using pre-defined function", a.length)
