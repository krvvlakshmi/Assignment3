//////calculation of rectangle area
function rect_area(l=5,w=7)
{
 return l*w;
}
console.log(`area of rectangle when no parameter are passed i.e, with default parameters is ${rect_area()}`);
console.log(`area of rectangle when parameter are passed is ${rect_area(15,13)}`);

///////pass by value and reference
// Passing primitive values (by value)
let Value = 10;
let copied_Value = Value;

console.log("initial Value:", Value);  // 10
console.log("Copied Value:", copied_Value);  // 10

Value = 20;
console.log("after changing value to 20")
console.log("initial Value :", Value);  // 20
console.log("Copied Value :", copied_Value);  // 10 


// Passing objects (by reference)
let Obj = { name: "remo", age: 15 };
let copy_Obj = Obj;
console.log("Original Object:",Obj);  // { name: 'John', age: 30 }
console.log("Referenced Object:", copy_Obj);  // { name: 'John', age: 30 }

Obj.name = "sweety";
console.log("after changing value to sweety")
console.log("Original Object:", Obj);  // { name: 'Jane', age: 30 }
console.log("Referenced Object", copy_Obj);  // { name: 'Jane', age: 30 } 


// Passing objects (by value) using spread operator or Object.assign
let Obj2 = { name: "charlie", age: 12 };
let copy_Obj2 = { ...Obj2 };

console.log("Original Object 2:",Obj2);  // { name: 'John', age: 30 }
console.log("Copied Object 2:", copy_Obj2);  // { name: 'John', age: 30 }

Obj2.name = "browny";
console.log("after changing name to browny")
console.log("Original Object 2 (after change):", Obj2);  // { name: 'Jane', age: 30 }
console.log("Copied Object 2 (after change):", copy_Obj2);  // { name: 'John', age: 30 }



////////callback functions
const  word=function(str)
{
    return str.toUpperCase();
}
const upper=function(str,func)
{
    console.log(`string : ${str}`);
    console.log(`after calling function:${func(str)}`);
}
upper("This is javaScript",word);

////calling after certain delay

function delayCallback(callback, delay) {
  setTimeout(() => {
    callback(delay);
  }, );
}
function myCallback(delay) {
  console.log(`Callback function is called after ${delay/1000} seconds!`);
}

delayCallback(myCallback, 5000); 
