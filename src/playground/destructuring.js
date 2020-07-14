// const person = {
//     name: 'James',
//     age: 30,
//     location: {
//         city: 'Tuscaloosa' ,
//         temp: 92
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp } = person.location;
// console.log(`It's ${temp} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

// const address = ['8 Brookhaven Drive', 'Tuscaloosa', 'Alabama', '35405'];
// const [steet, city, state = 'Mississippi', zip] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);