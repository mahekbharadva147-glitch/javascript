//object is the collection of any type of data
const person={
    name:'testing',
    age:24,
    hobbies:['cricket','listen music'],
     greet:function()
     {
                 console.log("hello")
     }
 }
 //acces values from object
  console.log(person.name)
 console.log(person['name'])

 //adding or modifying the data of object
 person.job ="react developer"
 person.salary=500000
 console.log(person)
 delete person.salary
console.log(person)
//nested object
const person1={
    name:'Mahek',
    age:24,
    address:{
        city:"keshod",
        zipcode:'362220',
        street:"123 main sociaty"
    }
}
console.log(person1)
console.log(person1?.address?.city)
