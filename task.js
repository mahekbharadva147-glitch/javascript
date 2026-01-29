let student={
    name:" first name ",
    email:"USER@GMAIL.COM",
    course:"JavaScript,React,Node",
    marks:[45,78,60,90,33],
    hobbies:["Music","Cricket","Reading"],
    address:["India",["Gujarat","Ahemdabad"]]
};

// let cleanName = student.name.trim().toUpperCase();
// console.log(cleanName);


// let emailLower = student.email.toLowerCase();
// console.log(emailLower);

// let hasReact = student.course.includes("React");
// console.log(hasReact);


// let nodeIndex = student.course.indexOf("Node");
// console.log(nodeIndex);



// let newCourse = student.course.replace("JavaScript", "js");
// console.log(newCourse);


// let courseArray = student.course.split(",");
// console.log(courseArray);


// let nameLength = student.name.trim().length;
// console.log(nameLength);



/* ================= ARRAY OPERATIONS ================= */

// convert course string to array
let courseArray = student.course.split(",");

// add "swimming" to hobbies
student.hobbies.push("Swimming");

// remove the last hobby
student.hobbies.pop();

// add "drawing" at the beginning
student.hobbies.unshift("Drawing");

// remove the first hobby
student.hobbies.shift();

// merge hobbies with course array
let mergedArray = student.hobbies.concat(courseArray);

// check if "react" exists in course array (case-insensitive)
let hasReact = courseArray
    .map(c => c.toLowerCase())
    .includes("react");

// find index of "js" in course array
let jsIndex = courseArray
    .map(c => c.toLowerCase())
    .indexOf("js");

// extract first two marks
let firstTwoMarks = student.marks.slice(0, 2);

// remove one failed subject mark (<40) using splice
let failIndex = student.marks.findIndex(m => m < 40);
if (failIndex !== -1) {
    student.marks.splice(failIndex, 1);
}

// convert hobbies array into a string
let hobbiesString = student.hobbies.join(", ");


/* ================= ARRAY ITERATION METHODS ================= */

// add 5 bonus marks to each mark
let bonusMarks = student.marks.map(m => m + 5);

// get only passed marks (>=40)
let passedMarks = student.marks.filter(m => m >= 40);

// find first mark above 80
let above80 = student.marks.find(m => m > 80);

// print each hobby
student.hobbies.forEach(hobby => {
    console.log("Hobby:", hobby);
});

// sort marks in ascending order
student.marks.sort((a, b) => a - b);

// reverse marks order
student.marks.reverse();

// flatten the address array
let flatAddress = student.address.flat();


/* ================= OBJECT HANDLING ================= */

// add result = "pass" if all marks are >=40
let isPass = student.marks.every(m => m >= 40);
if (isPass) {
    student.result = "pass";
}


/* ================= FINAL OUTPUT ================= */

console.log("Merged Array:", mergedArray);
console.log("Has React:", hasReact);
console.log("Index of JS:", jsIndex);
console.log("First Two Marks:", firstTwoMarks);
console.log("Hobbies String:", hobbiesString);
console.log("Bonus Marks:", bonusMarks);
console.log("Passed Marks:", passedMarks);
console.log("First Mark Above 80:", above80);
console.log("Flattened Address:", flatAddress);

console.log("Final Student Object:", student);





