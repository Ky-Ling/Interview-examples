
// 1: 
// const items = [
//     { name: "Rice", price: 3 },
//     { name: "Food", price: 12 },
//     { name: "Chicken", price: 23 },
//     { name: "Pencil", price: 34 },
//     { name: "Book", price: 54 }
// ]

// // let totalPrice = 0;

// // items.forEach(item => {
// //     totalPrice += item.price;
// // });


// // total: Thr previous value that was returned from reduce
// const totalPrice = items.reduce((total, item) => {
//     console.log(`Total: ${total}, Price: ${item.price}`);
//     return total + item.price;
// }, 0)



// console.log(totalPrice);







// 2: Group the people based on the age:
// const people = [
//     { name: "Brian", age: 19 },
//     { name: "Tim", age: 23 },
//     { name: "John", age: 43 },
//     { name: "David", age: 43 },
//     { name: "Jill", age: 23 }
// ]

// const result = people.reduce((groupedPeople, person) => {
//     const age = person.age;
//     if(groupedPeople[age] == null) groupedPeople[age] = [];

//     groupedPeople[age].push(person);

//     return groupedPeople;
// }, {});

// console.log(result);





// 3:
const numbers = [12, 3, 54];


// If we do not pass default parameter for the first value, it will take the first value of the array for
//      the first iteration. But if our array is empty, we will get an error.

const sum = numbers.reduce((total, number, index, array) => {
    return total + number;
})

console.log(sum);