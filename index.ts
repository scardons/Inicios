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
// const sumar = (a: number, b: number): number  => {
//     return a + b 
// }

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

//template union types son tipos que permite decrile la forma del string
// ${string} - ${string} - ${string} - ${string}

//Enums

enum ERROR_TYPES{
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}

function mostrarMensaje(tipoDeError: ERROR_TYPES): void {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
      console.log('No se encuentra el recurso')
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
      console.log('No hubo ningún error')
    } else {
      console.log('Error desconocido')
    }
  }
// repaso sumar nombres que me devuelvan
function saludito(nombre: string):void {
    console.log(`Hola, ${nombre}`)
}
saludito("santiago")
//repaso sumar numeros 

function sumar (a: number ,b: number){
    a + b 
}
const result = sumar (3,5)
console.log(result)

function sumarito (a:number, b: number){
    a+ b
}
const resultadito = sumarito (4,4)
console.log(resultadito)

function restar (a:number,b:number){
    a-b
}
const respuestica = restar (2,4)
console.log(respuestica)

function multiplicar (a:number, b:number){
    (a*b)
}
const resultadisimo= multiplicar (4,5)
console.log(resultadisimo)

//para sumar nombres
function saludote(nombre:string): void{
    console.log(`Hola, ${nombre}`)
}
saludote("santiago")

function hellow(name:string):void{
    console.log(`Hola, ${name}`)
}
hellow("santi")

// Crea una tupla llamada "loginData" con un email (string) y un booleano (si está logueado)
let loginData: [string,boolean] = ["usua@gmail.com", true]

console.log ("email",loginData[0])
console.log ("esta logueado", loginData[1])

// las tupas se usan mucho cuando se trabaja con datos estructurados, funciones o apis o estructuras pequeñas que no se necesiten un objeto completo

// enums que permite definir un conjunto de valores con nombre
// enum numerico
enum estadoPedido {
    pendiente,  //0
    enviado,    //1
    entregado,  //2
    cancelado   //3
}
const estado: estadoPedido = estadoPedido.enviado

console.log(estado)
console.log(estadoPedido[estado])
// enum con valores personalizaos

enum rolUsuarios{
    admin ="admin",
    cliente = "cliente",
    repartidor = "repartidor"
}
const rol: rolUsuarios = rolUsuarios.cliente
console.log(rol)

//enum con condiciones

function verificarAcceso(rol: rolUsuarios){
    if (rol === rolUsuarios.admin){
        console.log("acceso total")
    }else{
        console.log("acceso limitado")
    }
}

// union types permite a una variable tener mas de un tipo posible
let variable: string | number

variable = 123
variable = "hola"
// en una funcion 
function print(id: number | string){
    console.log ("tu id es", id )
}
print(42)
print("0de1")

//objeto tipado es un objeto que tiene una estructura definida y segura
const usuario: {nombre: string, edad: number} = {
    nombre: "santiago",
    edad: 22
}
// el type permite darle un nombre a cualquier tipo de dato objeto, union, tupla, funcion
type usuario = {
    nombre: string,
    edad: number    
}
// el interface tambien define las estructura de un objeto pero esta mas orientado a programacion orientada a objetos 
interface usaurio {
    nombre: string
    edad: number
}

// que es un literal type
//permite restringir un valor a una opcion exacta, como una lista fija de strings o numeros
type metodoHTTP = 'GET' | 'POST' | 'PUT' | 'DELETE'

function hacerPeticion(metodo: metodoHTTP){
    console.log(`haciendo peticion en metodo, ${metodo}`)
}
hacerPeticion('GET')
hacerPeticion('DELETE')
hacerPeticion('POST')
hacerPeticion('PUT')
// otro ejemplo en esato especifico
type estado = 'pendiente' | 'procesado' | 'completado'
const estadoActual: estado = 'pendiente'

// literal type en objetos
type notificacion = {
    tipo: 'succes' | 'error' | 'info'
    mensaje: string
}
const alerta: notificacion = {
    tipo: 'error',
    mensaje: 'algo salio mal'
}

//literal types + union types + types alises
// podemos combinarlo para hacer un tipo mas expresivo y mas seguro
type rol = 'admin' | 'cliente'
type accion = 'crear' | 'editar' | 'borrar'

type permiso = {
    rol: rol
    puede: accion[]
}

//🧩 Mini proyecto: Control de permisos según rol y acción
// Objetivo:
// Simular una función que recibe un rol ('admin', 'editor', 'lector')
// Y una acción ('crear', 'editar', 'eliminar', 'leer')
// Solo ciertos roles pueden realizar ciertas acciones.

// vamos a definir los tipos literales
type role = 'admin'| 'editor'| 'lector'
type action = 'crear' | 'editar' | 'eliminar' | 'leer'

//funcion que valida los permisos
function tienePermiso (rol: role, accion: action): boolean{
    if (rol === 'admin') return true

    if (rol === 'editor'){
        return accion === 'crear' || accion === 'editar'|| accion === 'eliminar'
    }

    if (rol === 'lector'){
        return accion === 'leer'
    }

    return false
}
console.log(tienePermiso('admin', 'eliminar')); // ✅ true
console.log(tienePermiso('editor', 'eliminar')); // ❌ false
console.log(tienePermiso('lector', 'leer'));     // ✅ true
console.log(tienePermiso('lector', 'crear'));    // ❌ false
