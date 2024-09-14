////function returning functions:-
function Func(name) {
  return function returning_Func(greeting) {
    console.log(`${greeting}, ${name}!`);
  };
}

// Test the returned function
const greet1 = Func("minnu");
greet1("Hello"); // Output: Hello,minnu!

const greet2 = Func("mailo");
greet2("Hi"); // Output: Hi,mailo!


///call(),bind(),apply()

let AirIndia={
    airLine:"Air India",
    iataCode:'AI',
    bookings:[],
    book:function(Num,passengerName){
        console.log(`${passengerName} has booked a seat on ${this.airLine} flight ${this.iataCode}${Num}`);
        this.bookings.push({flight:`${this.iataCode}${Num},name`});
    }

}
let AirIndiaExpress={
    airLine:"Air India Express",
    iataCode:'IX',
    bookings:[],
}
let GoFirst={
    airLine:"Go First",
    iataCode:'G8',
    bookings:[],

}
AirIndia.book(789356791214,"likitha");
const book=AirIndia.book;

var data=[456738920568,"yamini"];
book.apply(GoFirst,data);

book.call(AirIndiaExpress,987645672371,"nithya");

const bookGo=book.bind(GoFirst);
bookGo(598746321569,"harsha");
