const squre = x => x*x
console.log(squre(2))

const user = {
    name: 'Tay',
    sayHi: (arg) => {
        console.log(`Hi I'm ${this.name}`)
    },
    sayHiAlt() {
        console.log(`Hi I'm ${this.name}`)
    }
}


user.sayHi()

user.sayHiAlt()