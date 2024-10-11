// const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24 * 365)

// const date = new Date(2001, 9, 18)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// now.setFullYear(2055)

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

// ======

let mode = 'full'
const output = document.getElementById('output')
const fullbtn = document.getElementById('full')
const datebtn = document.getElementById('date')
const timebtn = document.getElementById('time')

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullbtn.onclick = bindMode('full')

datebtn.onclick = bindMode('date')

timebtn.onclick = bindMode('time')

setInterval(update, 1000)
update()


function update() {
    output.textContent = format(mode)
}


//Pure Function
function format (formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time' :
            return now.toLocaleTimeString()

        case 'date' :
            return now.toLocaleDateString()

        case 'full' :
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
            default:
            return now.toLocaleTimeString()
    }
}
