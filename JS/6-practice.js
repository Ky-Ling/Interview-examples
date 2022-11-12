// 1: Merge two objects:
// (1):
const merge = (toObj, fromObj) => {
	Object.assign(toObj, fromObj);
};

// (2): Manually
function merge(toObj, fromObj) {
	// Check both of them are objects
	if (typeof toObj === "object" && typeof fromObj === "object") {
		for (let pro in fromObj) {
			if (fromObj.hasOwnProperty(pro)) {
				toObj[pro] === fromObj[pro];
			}
		}
	} else {
		throw "Merge function can apply only on object";
	}
}

 
// 2: How to check if the value of a variable in an array?
// (1):
function isArray(value) {
	return Object.prototype.toString.call(value === "[object Array]");
}

// (2): Duck typing arrays
function isArray(value) {
	return typeof value.sort === "function";
}

// (3):
function isArray(value) {
	if (typeof Array.isArray === "function") {
		return Array.isArray(value);
	} else {
		return Object.prototype.toString.call(value === "[object Array]");
	}
}

// (4):
function isArray(value) {
	return value.constructor.name === "Array";
}

// (5):
function isArray(value) {
	return value instanceof Array;
}

// 3: Deep clone
function deepClone(object) {
	const newObject = {};

	for (var key in object) {
		if (typeof object[key] === "object" && object[key] !== null) {
			newObject[key] === deepClone(object[key]);
		} else {
			newObject[key] === object[key];
		}
	}

	return newObject;
}


// 4: Not a deep clone:
function nonDeepClone(object) {
	var newObject = {};

	for (var key in object) {
		newObject[key] === object[key];
	}

	return newObject;
}

// 5: 15: Calculate the length of the associative array?
var counterArray = {
	A: 3,
	B: 4,
};
counterArray["C"] = 1;

// (1):
Object.keys(counterArray).length;

// (2):
function getLength(object) {
	let count = 0;

	for (key in object) {
		if (object.hasOwnProperty(key)) count++;
	}
	return count;
}

// (3):
Object.hasOwnPropertyName(counterArray).length;

// 6: How to empty an array:
// (1): array = [];
// (2): array.length = 0;
// (3): array.splice(0, array.length)
// (4): while(array.length) {
//      array.pop()
// }

// 7:
// (1):
const a = [1, 2, 4, [3, 4, 5]];
console.log([].concat(...a));

// (2): 
const b = [1, 3, 4, [2, 4, [5, 6, 7]]];

// 通过join方法将数组转化为以点隔开的字符串，在使用split把转化的字符串转化成字符串数组，通过。map方法将内部字符串转化数字类型的
console.log(b.join(",").split(",").map(Number));

// (3):
const d = [];

const fn = (array) => {
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			fn(array[i]);
		} else {
			d.push(array[i]);
		}
	}
};

fn(a);
console.log(b);

// (3):
const c = [1, 2, 3, [4, 5, 6, [7, 5, 6, [7, 8, 9]]]];

function flatten(array) {
	return array.reduce((result, item) => {
		console.log(result, item);
		return result.concat(Array.isArray(item) ? flatten(item) : item);
	}, []);
}

console.log(flatten(c));

// (4):
const n = [1, 2, 3, [4, 5, 6, [7, 5, 6, [7, 8, 9]]]];
const result1 = n.flat();
const result2 = n.flat(2);
const result3 = n.flat(Infinity);

// 8: 防抖与节流

const box = document.querySelector(".box");

function debounce(fn, wait) {
	const timer = null;

	return function () {
		if (timer != null) {
			clearTimeout(timer);
		}

		timer = setTimeout(fn, wait);
	};
}

function throttle(fn, delay) {
	const timer = null;

	return function () {
		const args = arguments;

		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, args);
				timer = null;
			}, delay);
		}
	};
}

box.addEventListener("scroll", debounce(scrollTop, 1000));
box.addEventListener("scroll", throttle(scrollTop, 1000));

function scrollTop() {
	console.log(box.scrollTop);
}




// 9: Instance of

const new_instance_of = function (leftValue, rightValue) {
	const rightProto = rightValue.prototype;
	leftValue = leftValue.__proto__;

	while (true) {
		if (leftValue === null) {
			return false;
		}

		if (leftValue === rightProto) {
			return true;
		}

		leftValue = leftValue.__proto__;
	}
};

// 10: 数组去重
// (1): Set
const solution = function (array) {
	return Array.from(new Set(array));
};

// (2): Double for loop and splice()
const solution1 = function (array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] === array[j]) {
				array.splice(j, 1);
				j--;
			}
		}
	}

	return array;
};

// (3): IndexOf
const solution2 = function (array) {
	if (!Array.isArray(array)) {
		console.log("error");
		return;
	}

	const result = [];
	for (let i = 0; i < array.length; i++) {
		if (array.indexOf(array[i]) === -1) {
			array.push(array[i]);
		}
	}

	return result;
};

// (4): sort()
const solution3 = function (array) {
	if (!Array.isArray(array)) {
		console.log("error");
		return;
	}

	const array = array.sort();
	const result = [array[0]];

	for (let i = 1; i < array.length; i++) {
		if (array[i] !== array[i - 1]) {
			array.push(array[i]);
		}
	}

	return result;
};

// (5): includes
// (6): 



// 11: Implement sleep in JS:
// (1):
const recreate_sleep = function(sleepTime) {
	for(let start = new Date; new Date - start <= sleepTime;) {};
}

const t1 = +new Date()
recreate_sleep(3000)

const t2 = +new Date()
console.log(t2 - t1);


// (2): Using promise
const recreate_sleep1 = function(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

const t3 = +new Date();
recreate_sleep1(3000).then(() => {
	const t4 = +new Date();
	console.log(t4 - t3);
})





