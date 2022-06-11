function deepEquals(valueOne, valueTwo) {

    // (1): If both of them are not objects
    if (typeof valueOne !== "object" && typeof valueTwo !== "object") {

        // Check if they are Nan and number
        const isValueOneNaN = isNaN(valueOne) && typeof valueOne === "number";
        const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === "number";

        if (isValueOneNaN && isValueTwoNaN) return true

        return valueOne === valueTwo
    }

    if (typeof valueOne !== typeof valueTwo) return false

        
    // (2): Check if they are null
    if (valueOne === null && valueTwo === null) return true;
    if (valueOne === null || valueTwo === null) return false;

    // (3): This edge case is for performance
    if (valueOne === valueTwo) return true;

    // (4): If both of them are array
    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
        if (valueOne.length !== valueTwo.length) return false

        for (let i = 0; i < valueOne.length; i++) {
            if(!deepEquals(valueOne[i], valueTwo[i])) return false
        }

        return true
    }

    if(Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;



    // (4): Check if they are objects
    const valueOneKeys = Object.keys(valueOne);
    const valueTwoKeys = Object.keys(valueTwo);

    if(valueTwoKeys.length !== valueTwoKeys.length) return false;

    // Before we checking the value, we have to check keys first
    if(!deepEquals(valueOneKeys, valueTwoKeys)) return false;

    for(let i = 0; i < valueOneKeys.length; i++) {
        const key = valueOneKeys[i];

        const valueOneValue = valueOne[key];
        const valueTwoValue = valueTwo[key];

        if (!deepEquals(valueOneValue, valueTwoValue)) return false;
    }
    return true;

}


console.log(deepEquals(1, 1));
console.log(deepEquals("a", "a"));
console.log(deepEquals(NaN, NaN));

console.log(deepEquals([], []));
console.log(deepEquals([1], [1]));
console.log(deepEquals([[1, 2], [3, 4]], [[1, 2], [3, 4]]));

const array = new Array(100000).fill("a");
console.log(deepEquals(array, array));


console.log(deepEquals({}, {}));
console.log(deepEquals({a: 1}, {a: 1}));
console.log(deepEquals({a: 1, obj: {b: 1}}, {a: 1, obj: {b: 1}}));


console.log();
console.log("False!!!!!!!!!!!!");
console.log();


console.log(deepEquals(1, 3));
console.log(deepEquals("a", "c"));
console.log(deepEquals(NaN, 3));

console.log(deepEquals([], [1]));
console.log(deepEquals([2], [1]));
console.log(deepEquals([[1, 3], [4, 5]], [[1, 2], [4, 5]]));
console.log(deepEquals([[1, 3], [4, 5]], [["a", 2], [4, 5]]));

console.log(deepEquals({a: 1}, {}));
console.log(deepEquals({a: 2}, {a: 1}));
console.log(deepEquals({a: 1, obj: {b: 3}}, {a: 1, obj: {b: 1}}));


const obj1 = {a: undefined, b: 1};
const obj2 = {b: 2, c: 3}
console.log(deepEquals(obj1, obj2));
