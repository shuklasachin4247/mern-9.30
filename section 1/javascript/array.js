const arr = [785, 'hello',3.14, true, null, undefined, {name: 'John'},[1, 2, 3]]

console.log(arr);

console.log(typeof arr); //object

const movies = ['The Bhootni','bhul chuk maaf','Raid-2','kesariveer','Kesari chapter-2']

console.log(movies.length);

// accessing elements in an array
console.log(movies[4]);

console.log(movies.indexOf('bhul chuk maaf')); // 1

console.log(movies.at(-2));

// Replace element

movies[3] = 'Deadpool 3'
console.log(movies);

//slicing an array
console.log(movies.slice(1,2));
console.log(movies.slice(1,300));
console.log(movies.slice(-4,-2));

// Adding elements to an array
movies.push('House Full-5');
movies.unshift('sholey')
console.log(movies);

//Removing elements from an array
movies.pop();//Removes from the end
movies.shift(); //Removes from the beggining
console.log(movies);
//Splicing

movies.splice(2,1) // Removes 1 element at index 2

movies.splice(2,0,'Raid-2'); // Adds'Raid-2' at index 2 without removing any element

movies.splice(2,1,'Dar'); //Replaces the element at index 2 with'Dar'
console.log(movies);





