let c=true;
let d=Number.MAX_SAFE_INTEGER; //IF USED VAR IT WILL BE REDEFINED 
console.log("data Type of c is : ", typeof c);
console.log("MAX LIMITT of d is : ",  d);
console.log(d+1); //got added +1
console.log(d+2); //did not change remained same 
console.log(d+3);// garbage value 
let a =BigInt(d);
console.log(a); //big int will add a "n"- compiler will know its bigint
let b=BigInt(1000); //identification of bigint is b
let e=a+b;
console.log(e); //added 1000 to a 
let x;
console.log("data Type of x is : ", typeof x); //undefined and null diffrence 
let y=null;
console.log("data type is ",typeof y) //object

let h=Symbol();
let h1=Symbol();
console.log("compare ", h==h1);




