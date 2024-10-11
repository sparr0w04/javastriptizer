// let num = 42
// let firstName = 'Egor'
// const isProgrammer = true

// firstName = ' Egor'
// isProgrammer = false  // ошибка

/* Разрешенка
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 42
let _num = 42
let first_name = 'Elena'
let myNum = 22
let num42 = 10 */


/* Запрещенка
let 42num = '11'
let my-name = 1
let let
const const
 */



// alert(firstName)


// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)


// let num2 = num + 10
// console.log(num , num2)
// num = num2 - num
// console.log(num, num2)

// let num3 = num + (10 * 2) / (5 - 1)
// console.log(num3)

// const fullName = firstName + ' ' + 'Vorobiev'
// console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
let action = '+'



// console.log(resultElement.textContent)
// resultElement.textContent = 42 - 2 / num


// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplicationBtn.onclick = function () {
	action = '*'
}

divisionBtn.onclick = function () {
	action = '/'
}



function printResult(result) {
     if (result < 0) {
				resultElement.style.color = 'red'
			} else {
				resultElement.style.color = 'green'
			}
			resultElement.textContent = result
}


function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    if(actionSymbol == '+') {
        return  num1 + num2
    }

    if (actionSymbol == '-') {
        return num1 - num2
    }

    if (actionSymbol == '*') {
		return num1 * num2
	}

    if (actionSymbol == '/') {
        return num1 / num2
    }



}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2 , action)
    printResult(result)
    // if (action == '+') {
	// 		const sum = Number(input1.value) + Number(input2.value)
    //         printResult(sum)
	// 	}   else if (action == '-') {
	// 		const sum = Number(input1.value) - Number(input2.value)
    //         printResult(sum)
	// 	}



}

