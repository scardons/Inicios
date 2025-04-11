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

// parametros opcionales usando (?)


//Funciones como tipos: funciones que reciben o retornan funciones.
// como cunado una funcion retorna otra funcion, es muy util para programacion funcional, callback, middleware, validaciones y mas
//funcion como tipo (tipo de una funcion)
type operacion = (a: number, b: number) => number

const sumarr: operacion = (a,b) => a + b
const restarr: operacion = (a,b) => a - b 

//funciones que reciben otras funciones
// muy comunes en los callback
function calcular (a:number, b:number, operacion:(x:number, y:number) => number):number {
    return operacion(a,b)
}
console.log(calcular(5,3, sumarr))
console.log(calcular(5,3, restarr))
//funciones que retornan otras funciones 
//se usan en clousure, factories, middlewares
function crearMultiplicador(factor: number): (x:number) => number {
    return function(x: number): number {
        return x* factor
    }
}
const por2 = crearMultiplicador(2)
const por5 = crearMultiplicador(3)

console.log(por2(10))
console.log(por5(10))

//Tipos genéricos (<T>) y funciones genéricas.
//Es uno de los pilares mas poderosos de typescript: los tipos genericos(<T>) me permite escribir funciones, clases o interfaces reutilizables que funcionan con cualquier tipo, para mantener un tipado fuierte 
// un tipo generico es una plantilla de tipo, en vez de es de usar el tipo exacto como string o number escribes una letra generica como (<T>)

// funcion generica basica 
function devolverLoMismo<T>(valor: T): T {
    return valor
}
const texto = devolverLoMismo("hola")
const numero = devolverLoMismo(342)
const esValido = devolverLoMismo(true)
//🔍 Aquí, T puede ser cualquier tipo, y TypeScript infiera el tipo automáticamente.

//Intersection types (type A = B & C).
// se usa para combinar multiples tipos en uno solo 
type a ={nombre:string}
type b ={edad:number}

type Persona = a & b

const personas: Persona = {
    nombre: "santiago",
    edad: 23
}

// ejemplo realista de intersection types 
type usuarioo = {id: number; nombre: string}
type permisos = {rol: "admin"|"users"; activo: boolean}

type usuarioConPermiso = usuarioo & permisos

const admin: usuarioConPermiso = {
    id: 1,
    nombre: "leidy",
    rol: "admin",
    activo: true
}

//Type guards: validación con typeof, instanceof.

// son herramientas que permiten validar tipos de tiempo de ejecucion usando condiciones como typeof, instanceof, o incluso funciones personalizadas

//es una verificacion logica en typescript inferir en un tipo mas especifico dentro de un bloque if 

//typeof para tipos primitivos
function imprimir (valor: string | number){
    if (typeof valor === "string"){
        console.log("Es un string", valor.toUpperCase())
    }else{
        console.log("es un numero", valor.toFixed(2))
    }
}

//👉 typeof solo funciona con: "string", "number", "boolean", "undefined", "symbol", "bigint", "function", "object"

//🔸 2. instanceof — Para clases

class perro{
    ladrar(){
        console.log("guau")
    }
}
class gato{
    maullar(){
        console.log("miau")
    }
}
function hacerSonido(animal:perro | gato){
    if(animal instanceof perro){
        animal.ladrar
    }else{
        animal.maullar
    }
}

//🧠 Aquí instanceof verifica si el objeto fue creado por una clase específica.

// una clase es una plantilla para crear objetos con propiedades y metodos

// ejemplo de clase y constructor

class personass {
    nombre: string
    edad:number
    //el constructor inicializa las propiedad
    constructor (nombre: string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }

    saludar():void{
        console.log(`Hola, soy${this.nombre} y tengo ${this.edad} años`);
    }
}
// crea una instancia (objeto)
const personal = new personass("ana",30)
personal.saludar()

// que pasa en este ejemplo
//class personass = define el modelo 
//contructor() = se ejecuta automaticamente al crear un nuevo objeto
//this.nombre = nombre = asigna los valores a la instancia
//saludar() es un metodo que la clase puede ejecutar

//con valores por defecto 

class producto{
    nombre: string
    precio: number

    constructor(nombre: string, precio: number = 0){
        this.nombre = nombre
        this.precio = precio
    }

    mostrar(){
        console.log(`${this.nombre} cuesta $${this.precio}`)
    }
}
const p = new producto("camiseta")
p.mostrar


// // ejercicio🔧 Ejercicio
// Crea una clase llamada Libro con estas características:

// 📚 Propiedades:
// titulo (string)

// autor (string)

// anio (number)

// 🛠 Constructor:
// Inicializa esas tres propiedades.

// 🗣 Método:
// Un método descripcion() que devuelva un texto como:

// arduino
// Copiar
// Editar
// "El libro 'Clean Code' fue escrito por Robert C. Martin en el año 2008."

class libro{
    titulo: string
    autor: string
    anio: number

    constructor (titulo: string, autor: string, anio:number){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
    }

    descripcion(){
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor} en el anio ${this.anio}`)
    }
}
const libro1 = new libro("Clean Code", "Robert C. Martin", 2008)
console.log(libro1.descripcion)

//Modificadores de acceso: public, private, protected.

//controlan que propiedades se puede usar fuera o dentro de la clase 

//public por defecto 
//se puede acceder desde cualquier parte fuera o dentro de la clase

class personasss{
    public nombre: string

    constructor(nombre:string){
        this.nombre = nombre
    }

    saludar(){
        console.log(`hola, soy${this.nombre}`)
    }
}

const l = new personasss("santiago")
console.log(l.nombre)

//private
//solo se puede acceder dentro de la clase donde fue declarado 

class CuentaBancaria {
    private saldo: number;
  
    constructor() {
      this.saldo = 1000;
    }
  
    verSaldo() {
      return this.saldo;
    }
  }
  
  const cuenta = new CuentaBancaria();
  console.log(cuenta.verSaldo()); // ✅ Funciona
  // console.log(cuenta.saldo); // ❌ Error: 'saldo' es privado

  //protected 
  //se puede acceder dentro de las clases y desde las clases hijas
  class Animal {
    protected especie: string;
  
    constructor(especie: string) {
      this.especie = especie;
    }
  }
  
  class perritos extends Animal { // para cambiar de Animal a perritos
    ladrares() {
      console.log(`El ${this.especie} ladra 🐶`);
    }
  }
  
  const perross = new perritos("canino");
  perross.ladrares(); // ✅ El canino ladra
  // console.log(perro.especie); // ❌ Error: 'especie' es protected
  
  //Interfaces para clases.
//para forzar a las clases a cumplir una forma especifica
//para mejorar la consistencia del codigo
//para programar con mayor flexibilidad y escalabilidad

//sintaxix basica 
interface vehiculo{
    marca: string
    encender(): void
}
//Ahora, una clase que implemente esta interfaz debe tener esas propiedades y métodos:

class Carro implements vehiculo {
    marca:string

    constructor(marca:string){
        this.marca = marca
    }
    encender(): void {
        console.log(`El ${this.marca} está encendido 🚗`)
    }
}

//herencia y abstraccion
//herencia
//cuando una clase hereda propiedades y metodos de otra clase
class Animalito {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    emitirSonido(): void {
      console.log(`${this.nombre} hace un sonido`);
    }
  }
  
  // 🐶 Perro hereda de Animal
  class Perro extends Animalito {
    ladrar(): void {
      console.log(`${this.nombre} ladra 🐶`);
    }
  }
  
  const miPerro = new Perro("Max");
  miPerro.emitirSonido(); // Max hace un sonido
  miPerro.ladrar();        // Max ladra 🐶
  //que gana la herencia 
  //se reutiliza el codigo base no tienes que repetir nombre ni emitirSonido()

  //abstraccion
  //consiste en ocultar detalles internos y mostrar lo necesario
  //en typescript usamos clases abstractas para definir una estructura que no se puede instaciar
  abstract class Figura {
    abstract calcularArea(): number; // método abstracto sin implementación
  
    describir(): void {
      console.log("Soy una figura geométrica");
    }
  }
  
  class Cuadrado extends Figura {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    calcularArea(): number {
      return this.lado * this.lado;
    }
  }
  
  const figura1 = new Cuadrado(5);
  console.log(figura1.calcularArea()); // 25
  figura1.describir(); // Soy una figura geométrica
  
  // ❌ const figuraBase = new Figura(); // Error: no se puede instanciar una clase abstracta

  //Decoradores (más avanzado, pero útil si usas frameworks).

//los decoradores es una funcion especial que puedes usar para modificar clases, propiedades, metodos o parametros en tiempo de compilacion
//importante: para usar decoradores en typescript debes activar la opcion esperimentalDecotarptos en tsconfig.ts
// {
//     "experimentalDecorators": true
//   }
  
// Tipo	Se aplica a...
// @Class	Clases
// @Property	Propiedades de clase
// @Method	Métodos
// @Parameter	Parámetros de métodos
function Logger(constructor: Function) {
    console.log("Clase registrada:", constructor.name);
  }
  
  @Logger
  class Usuario {
    constructor() {
      console.log("Usuario creado");
    }
  }
  
  // Al compilar, se imprime:
  // Clase registrada: Usuario
  // Usuario creado
  