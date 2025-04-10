const persona = { //objeto
    name: 'pepe',
    age: 12
}

persona.name

let anyValue: any = 'hola' //para ignorar el tipo

anyValue.aa

//functions //el parametro tiene que tener tipado
function saludar(name: string){
    name.toUpperCase()
    console.log(`hola ${name}`)
}

//objetos como funciones
function saludo({names, ages}:{names: string, ages: number}){
    console.log(`hola${names}, tienes ${ages} años`)
}
saludo ({names: 'pepe', ages: 2})

//tipar arrow function
const sumar = (a: number, b: number): number  => {
    return a + b 
}

// never funciones que nunca van a devolver nada
function throwError(message: string): never {
    throw new Error(message)
}
// onbjeto
// let hero = {
//     name: 'thor',
//     age: 22
// }

// function createHero(name: string, age: 22){
//     return{name, age}
// }
// const thor = createHero ('thor', 22)

//type alias

type Hero = {
    id?: number,
    name: string,
    age: number, //propiedad del onjeto
    isActive?: true // ? si esta bien si no ok
}

let hero: Hero = {
    name: 'thor',
    age: 22
}

function createHero(hero: Hero): Hero{
    const {name, age} = hero
    return{name, age, isActive: true} //argumento
}
const thor = createHero ({name: 'thor',age: 22})
console.log(thor.isActive)

// thor.id?.toString() // ? si tiene un id lo ejecuta si no no
thor.id = 23423523

//union types

type HeroPowerScale = 'local' | 'planeraty' | 'galatic'

type Heros = {
    id?: number,
    name: string,
    age: number, //propiedad del onjeto
    isActive?: true // ? si esta bien si no ok
}

let heros: Heros = {
    name: 'thor',
    age: 22
}

//typeOf  Extraer los tipos de un objeto y funciones tipadas
const address = {
    planet: 'Earth',
    city:   'usa'
}

type Address = typeof address

const addressTwich: Address = {
    planet: 'mars',
    city: 'medellin'
}

// type from function return
//recuperar tipos atravez de funciones

function createAddress(){
    return {
        planet: 'tierra',
        city: 'barcelona'
    }
}

type Addresss = ReturnType<typeof createAddress>

//arrays

const languajes = []

languajes.push('javaScript')
languajes.push(2)

// matrices
const gameBoard:string [][] = [
    ['x','o','x'],
    ['o','x','o'],
    ['x','o','x']
]

