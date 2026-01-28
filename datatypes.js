//two types or data types
//1.primitve
  //Number
  //BigInt
  //String
  //Boolean
  //Symbol
  //Null
  //undefined

//2.Non primitive
//Array
//Object
//Function

//let num=1;
//let num2=2;

//console.log("num",num,num2);

//let name="mahek";
//let name2="manshi";

//console.log("names:",name2,name)
//Boolean
//let isTrue=true;
//let isfalse=false;
// console.log("boolean:")

 //undefined
 //let a;
 //console.log("ubdefined:",a)

 //letBigInt=1233565662362646;
 //console.log(BigInt);

 //2.Non primitive
 //object

 //let student={
   // name:"mahek",
    //roll:56,
    //address:{
     //   city:"keshod",
    //}
 //}
 //console.log(student)
//Array
//let a=[1,2,3,4,5,6,7,8,9];
//let student={
//}
//let arrayOfStud=[{},{}]
//console.log(a);

//Function

//function greet(){
  //  console.log("This is function");
//}
//greet();

//function showValues(Value){
    //console.log("this is Value:",value);
    //if(value==20){
    //   console.log("number---------");
  //}
//}
//showValues();
//showValues(20);
//showValues([1,2,3,4,5]);
//showValues();
//addtion
const add=(num1=5,num2=5)=>{
    return num1+num2
}
console.log('this is arrow fun:',add())
//sub
const sub=(num1=5,num2=5)=>{
    return num1-num2
}
console.log('this is arrow fun:',sub())
//mul
const mul=(num1=5,num2=5)=>{
    return num1*num2
}
console.log('this is arrow fun:',mul())
//div
const div=(num1=5,num2=5)=>{
    return num1/num2
}
console.log('this is arrow fun:',div())


//addition
//function addition(a,b){
  //  console.log(a+b);
//}
//addition(10,20);

//multiplication
//function multiplication(a,b){
  //  console.log(a*b);
//}
//multiplication(10,20);

//division
//function division(a,b)
//{
  //  console.log(a/b);
//}
//division(10,20);

//substraction
//function substraction(a,b)
//{
  //  console.log(a-b);
//}
//substraction(10,20);
let values=10;
console.log('DEFAULT VALUE:',value);

value+=5//value +5
console.log(value)


value-=5//value -5
console.log(value)

value*=5//value *5
console.log(value)

value/=5//value /5
console.log(value)

let age=20;
let hasId=true
 
console.log("logical AND (&&):",age>18 && hasId);
console.log("logical OR(||):",age<18 || hasId);
console.log("logical NOT (!):", !hasId);