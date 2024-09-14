///Immediately Invoked Function Expression

(()=>{console.log("this is IIFE concept in javaScript")})();

///self-Executing function
(function(){
    console.log("this is a self executing function!");
    let a=3;
    console.log(a**4);
})();

///closures:-it is a function which has access to its inner scope as well as to its outer scope
function counter()
{
    let count=0;
    return function()
    {
        count++;
        console.log("count:",count);
    };
}
const count=counter();
count();
count();
count();