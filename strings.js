/////String Methods:-
//split()
const str="this*is*Strings*concept*in*JavaScript!!";
s=(str.split("*"));
console.log(s);
const[str1,str2]="good morning".split(" ");
console.log(str1);
console.log(str2);

//join()
s2=(s.join(" "));
console.log(s2);

//toUpperCase():convert entire string into uppercase
console.log(s2.toUpperCase());

//toLowerCase():convert entire string into lowercase
console.log(s2.toLowerCase());

//padding
msg="it is an invalid information";
console.log(msg.length);
console.log(msg.padStart(30,'-'));
console.log(msg.padEnd(30,'-'));
console.log(msg.padStart(35,'*').padEnd(42,'*'));

//slice
console.log(msg.slice(3,16));
console.log(msg.slice(-11));
console.log(msg.slice(2));

//repeat
console.log(str1.padEnd(5," ").repeat(5));

//replace
str4="hii good evening";
console.log(str4);
console.log(str4.replace("hii","hello"));

//trim:remove starting and ending spaces
str5="    good afternoon   "
console.log(str5);
console.log(str5.trim());

//starts with()
console.log(s2.startsWith("this"));
console.log(str4.startsWith("hello"));

//ends with()
console.log(s2.endsWith("Script!!"));
console.log(str4.endsWith("morning"));

//include()
console.log(str4.includes("after"));
console.log(str5.includes("noon"));


/////////equality of email addresses
const email="minnu@gmail.com";
const login_mail="   Minnu@Gmail.Com  ";
function normalize(mail){
    normal=mail.toLowerCase().trim();
    return normal;
}
if(email === login_mail)
{
    console.log("mail address is correct:)");
}
else if(normalize(login_mail)===email)
{
    console.log("enter it again in all lowercase without spaces at beginning and ending");
}
else
{
    console.log("mail address is incorrect:(,please enter valid details");
}