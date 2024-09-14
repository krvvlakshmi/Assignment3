//////restaurent code:-
// 1. Create restaurant object
const restaurant = {
  name: "Bawarchi",
  location: "123 Main street,hyderabad",
  menu: [
    { name: "chicken dum biryani", price: 359, description: "a classic hyderabadi delight,chicken dum birayni is a slow cooked,aromatic rice dish." },
    { name: "haleem", price: 159, description: "haleem is flavourful dish usually made with chicken ,wheat and some spices meld together,creating a thick,creamy paste with a tender. " },
  ],
};

// Using spread operator to create a new menu item
const newMenuItem = { ...restaurant.menu[0], name: "dragon chicken", price: 249,description:'a spicy bone less chicken fried in oil then add sauces to it.' };

// Add new menu item to the menu array
restaurant.menu.push(newMenuItem);

console.log(restaurant.menu);

// Convert restaurant object to JSON
const restaurantJSON = JSON.stringify(restaurant, null, 2);
console.log(restaurantJSON);
