const user = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    password: 'abc123',
    phn : 6394004841,
}

console.log(user);

console.log(user.name);

user.name = 'Raju'; // Updating the name property 
console.log(user.name);

user.city = 'Lucknow'; // Adding a new property
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: "Samsung",
    model: "S25 Ultra Edge",
    price: 158000,
    colors: ["Black", "White", "Blue"],
}

console.log(smartphone);

console.log(smartphone.colors);
console.log(smartphone.colors[2]); // Accessing the first color

console.log(smartphone.colors.push("Red")); // Adding a new color
console.log(smartphone.colors.length); // Checking the length of the colors array
console.log(smartphone.colors);

smartphone.colors[1] = "Green"; // Updating the second color
console.log(smartphone.colors);

smartphone.colors.shift(); // Removing the first color
console.log(smartphone.colors);

const smartphoneArray = [{
    brand: "Samsung",
    model: "S25 Ultra Edge",
    price: 158000,
    colors: ["Black", "White", "Blue"],
}, {
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    price: 199999,
    colors: ["Silver", "Gold", "Space Black"],
},{
    brand: "OnePlus",
    model: "OnePlus 11",
    price: 59999,
    colors: ["Black", "Green", "Purple"],
}]

console.log(smartphoneArray);
console.log(smartphoneArray[0].colors[2]);

smartphoneArray[1].colors.unshift("Pink"); // Adding a new color to the second smartphone
console.log(smartphoneArray[1]);

// Add new color to 2nd smartphone.

smartphoneArray[1].colors.push("grey")
console.log(smartphoneArray[1]);

// Change price of 3rd smartphone to 49999.

smartphoneArray[2].price = 49999
console.log(smartphoneArray[2]);

// replace first two colors of 3rd smartphone with "Blue" and "Red".

smartphoneArray[2].colors[0] = 'Blue'
smartphoneArray[2].colors[1] = 'Red'
console.log(smartphoneArray[2]);


// 1. How would you access John's email from the user object?

console.log(user.email);


// 2. Write code to add a 'warranty' property with value '2 years' to the first smartphone object

smartphoneArray[0].warranty = '2 years'
console.log(smartphoneArray[0]);


// 3. How would you find the total price of all smartphones in the smartphoneArray?

const sum = smartphoneArray[0].price + smartphoneArray[1].price + smartphoneArray[2].price;
console.log(sum);

// 4. Create a function that takes smartphoneArray and returns an array containing only the brand names

const brand = []
smartphoneArray.forEach((s) => {
    brand.push(s.brand)
})
console.log(brand);



// 5. Write code to check if any smartphone in the array has the color "Purple"

console.log(smartphoneArray[2].colors.includes("Purple"));



// 6. Add a new smartphone object to smartphoneArray with brand "Xiaomi", model "Mi 11", price 45000, and colors ["Black", "Blue"]
smartphoneArray.push({
    brand : "Xiaomi",
    model : "Mi 11",
    price : 45000,
    colors : ["Black", "Blue",]
})
console.log(smartphoneArray);











