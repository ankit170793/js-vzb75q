// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');


//rest operator in arrays

function addition(a,b, ...other){
  console.log(other);
  return a+b;
}

const res = addition(2,2,5,1,2,1);
console.log(res);
appDiv.innerHTML = `<h1>${res}</h1>`;

//spread operator in arrays
var names = ["ankit", "sumesh", "ayush","sonu"];

function getNames(name1,name2,name3,name4){
  console.log(names);
}
getNames(...names);

// rest operator in object
const students = {
 name:'ankit',
 age:'29',
 hobby:['movies','cooking']
}
const {...detail} =students;
console.log(detail);

//using spread in object
//cloning object and also over riding property
const newStd = {
  ...students,
  age:'32'
}
console.log(newStd)

