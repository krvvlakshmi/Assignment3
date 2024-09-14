/////shallow copy:-
const person1={
    name:"minnu",
    age:13
};
const person2 = Object.assign({},person1);
person2.age = 15;
console.log(`details of person1 are 
    name:${person1.name} and age:${person1.age}`); ///name=minnu age=13

console.log(`details of person2 are 
    name:${person2.name} and age:${person2.age}`); ///name=minnu age=15


/////deep copy:-

var person22;
function deepCopy(p1,p2)
{
  p2=p1;
  console.log(p2);
}
const person11={
    name1:"mailo",
    age1:15,
    frds:['rocky','snoopy'],
    fav:{
        colour:"blue",
        food:"noodles"
    }
};
deepCopy(person11,person22);
console.log(person22);   //undefined