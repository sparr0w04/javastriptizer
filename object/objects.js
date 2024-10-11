const person = {
    name: 'Egor',
    age:22,
    isProgrammer: true,
    languages: ['ru','en'],
    address : {
        city: 'Maima',
        street: 'Avtomobilistov',
    },
    'complex key': 'complex value',
    ['key_' + 21 * 2]: 'computed value',
    greet() {
        console.log('Greet from person', this)
    },
    arrow: () => {
       console.log('Person arrow', this)
    },
    info() {
        console.log('Person name', this.name)
    }

}

// console.log(person.address)
// console.log(person['address'])
// console.log(person['complex key'])

// person.age++
// person.languages.push('Alt')
// console.log(person.languages)
// delete person.address
// console.log(person)

//1 VARIANT
// const age = person.age
// const name = person.name
// const languages = person.languages


//2 VARIANT CHETKYI
// const name ='Petr'

// const {age, name:firstName, languages} = person

// console.log(languages, age, name, firstName)


// for (let key in person) {
//  if (person.hasOwnProperty(key))
//     console.log(person[key])
// }

const logger = {
    keys(withText = true) {
        if (withText) {
        console.log('Object keys', Object.keys(this))
        } else {
            console.log( Object.keys(this))
        }
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key:',key)
            console.log('Value:',this[key])
        })
    },
}

// // logger.keys.bind(person)()
// logger.keys.call(person,false)
// logger.keys.apply(person, [false,])

class Human {
   static isHuman = true

    humanGreet() {
        console.log('greet from human')
        return 42
    }

    toString() {
        console.log('to string')
    }
}

class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'Undefined name'
        this.age = age ?? 'Undefined age'
    }

    sayHello() {
        console.log('hello from', this.name)
    }

}

const person1 = new Person('Egor', 22)
const person2 = new Person('Nastya', 22)

// console.log(person1)