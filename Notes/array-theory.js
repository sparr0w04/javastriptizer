const names = ['Егор', 'Настя', 'Данил', 'Тамара']

// names.push('Алена')
// names.unshift('Алена')

// const name = names.shift()
// const name = names.pop()

// console.log(names.reverse())
// const reversed = names.toReversed()
// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.toSorted(function(a, b) {
//     return a.charCodeAt(0) - b.charCodeAt(0)
// })
// )
// console.log(letters)

// console.log(names.Spliced(2, 2))
// console.log(names.toSpliced(2, 2))
// console.log(names)

// const greatWoman = 'Настя'
// const index = names.indexOf(greatWoman)
// // console.log(index)
// const newNames = names.with(index, 'Настя Великая')
// // names[index] = 'Настя Великая'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// const capitalNames = names.map(function
// (name, index) {
//     if (index === 1) {
//         return 'Настя Великая'
//     }
//     return name
// })
// console.log(capitalNames)
// console.log(names.indexOf('Данил') !== -1)

const people = [
    { name: 'Егор', budget:4200 },
    { name: 'Настя', budget:15100 },
    { name: 'Данил', budget:300 },
    { name: 'Тамара', budget:7520 },
]

// console.log(people.indexOf({ name: 'Егор', budget: 4200 }))

// let findPerson

// for (let person of people) {
//     if (person.budget === 7520) {
//         findPerson = person
//     }
// }

// const finded = people.find(p => p.budget === 7520)

// const finded = people.findIndex(function (person) {
//     return person.budget === 7520

// })

// console.log(people.with[finded, 42])

// let sunBudget = 0
// const filtered = people.filter(function (p) {
//     return p.budget > 5000
// })
// console.log(filtered)
// filtered.forEach(function (p) {
//     sumBudget += p.budget
// })

// const sumBudget = people
//     .filter((p) => p.budget > 5000 )
//     .map((p) => p.budget)
//     .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

const string = 'Привет, как дела?'
const reversed = string
.split('')
.toReversed()
.join('!')
.split('')
.filter(c => c !== '!')
.join('')

console.log(reversed)
