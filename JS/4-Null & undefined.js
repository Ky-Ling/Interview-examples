// 1: Both of them mean that there is no value for this variable or thing that we are trying to access.

// 2: When we use null: We are specific saying this thing has not value, and we return null to tell that 
//      there is no value for this thing.

// 3: undefined: this thing has not been defined yet. Everything is undefined until you define it and by   
//      defining something as null --> this thing has been defined but it does not have any value at all.
//      Something is undefined --> this thing has not been defined yet, it just does not exist yet.


// 4: 
let x = null;
console.log(x); // null

// 5: Another big difference is that in an arithmetic operation, null essentially behaves like 0 
//      while undefined will make the result NaN.
1 + null === 1;
1 * null === 0;
1 + undefined === NaN;


// 6: undefined has its own type while null is an object.

// 7: Use undefined to destroy a variable, null it just reset it to no typed variable but still exist and defined

// 8: 
JSON.stringify({foo: undefined})    // outputs "{}"
JSON.stringify({foo: null})         //outputs '{"foo": null}'


let y = undefined;
console.log(y); // undefined



let a;
console.log(a); // undefined

console.log(null == false); // true
console.log(null === false); // false