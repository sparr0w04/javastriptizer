// //Function Declaration
// function greet(name) {
//     console.log('Hello -', name)
// }



// //Function Expression
// const greet2 = function (name) {
// 	console.log('2Hello -', name)
// }
// greet('Egor')
// greet2('Egor')

// // console.dir(greet)

// // setTimeout(function () {
// //     greet('Egor')
// // } ,1500)

// let counter = 0
// const Interval = setInterval(function () {
//     // if (counter === 5) {
//     // } else {
//     //     ++counter
//     // }
//     // console.log(++counter)
// }, )

//Arrow Function
function greet(name) {
    console.log('Hello - ', name)
}

const arrow = (name, age) => {
    console.log('Hello - ', name, age)
}

const arrow2 = (name) => console.log('Hello - ', name)

function pow(nun, exp) {
    return Math.pow(nun, exp)
}

const pow2 = (num, exp) => {
    return Math.pow2(nun, exp)
}

// console.log(pow(2, 3))

// Default Parameters
const sum = (a = 40, b = a / 2) => a + b

// console.log(sum(40, 2))
// console.log(sum(40))

function sumAll(...numbers) {
// let res = 0
// for (let num of numbers) {
//     res += num
// }

return numbers.reduce((acc, cur) => (acc += cur), 0)
 }

// console.log(sumAll(1, 2, 3, 4, 5))


// Closers

function createPerson(name) {
    return function (lastname) {
			// console.log(name + ' ' + lastname)
		}
}

const addLastName = createPerson('Egor1')
addLastName('Vorobev')
addLastName('Denejkin')

