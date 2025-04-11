"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
const persona = {
    name: 'pepe',
    age: 12
};
persona.name;
let anyValue = 'hola'; //para ignorar el tipo
anyValue.aa;
//functions //el parametro tiene que tener tipado
function saludar(name) {
    name.toUpperCase();
    console.log(`hola ${name}`);
}
//objetos como funciones
function saludo({ names, ages }) {
    console.log(`hola${names}, tienes ${ages} años`);
}
saludo({ names: 'pepe', ages: 2 });
//tipar arrow function
// const sumar = (a: number, b: number): number  => {
//     return a + b 
// }
// never funciones que nunca van a devolver nada
function throwError(message) {
    throw new Error(message);
}
let hero = {
    name: 'thor',
    age: 22
};
function createHero(hero) {
    const { name, age } = hero;
    return { name, age, isActive: true }; //argumento
}
const thor = createHero({ name: 'thor', age: 22 });
console.log(thor.isActive);
// thor.id?.toString() // ? si tiene un id lo ejecuta si no no
thor.id = 23423523;
let heros = {
    name: 'thor',
    age: 22
};
//typeOf  Extraer los tipos de un objeto y funciones tipadas
const address = {
    planet: 'Earth',
    city: 'usa'
};
const addressTwich = {
    planet: 'mars',
    city: 'medellin'
};
// type from function return
//recuperar tipos atravez de funciones
function createAddress() {
    return {
        planet: 'tierra',
        city: 'barcelona'
    };
}
//arrays
const languajes = [];
languajes.push('javaScript');
languajes.push(2);
// matrices
const gameBoard = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];
//template union types son tipos que permite decrile la forma del string
// ${string} - ${string} - ${string} - ${string}
//Enums
var ERROR_TYPES;
(function (ERROR_TYPES) {
    ERROR_TYPES[ERROR_TYPES["NOT_FOUND"] = 0] = "NOT_FOUND";
    ERROR_TYPES[ERROR_TYPES["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
    ERROR_TYPES[ERROR_TYPES["FORBIDDEN"] = 2] = "FORBIDDEN";
})(ERROR_TYPES || (ERROR_TYPES = {}));
function mostrarMensaje(tipoDeError) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el recurso');
    }
    else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No hubo ningún error');
    }
    else {
        console.log('Error desconocido');
    }
}
// repaso sumar nombres que me devuelvan
function saludito(nombre) {
    console.log(`Hola, ${nombre}`);
}
saludito("santiago");
//repaso sumar numeros 
function sumar(a, b) {
    a + b;
}
const result = sumar(3, 5);
console.log(result);
function sumarito(a, b) {
    a + b;
}
const resultadito = sumarito(4, 4);
console.log(resultadito);
function restar(a, b) {
    a - b;
}
const respuestica = restar(2, 4);
console.log(respuestica);
function multiplicar(a, b) {
    (a * b);
}
const resultadisimo = multiplicar(4, 5);
console.log(resultadisimo);
//para sumar nombres
function saludote(nombre) {
    console.log(`Hola, ${nombre}`);
}
saludote("santiago");
function hellow(name) {
    console.log(`Hola, ${name}`);
}
hellow("santi");
// Crea una tupla llamada "loginData" con un email (string) y un booleano (si está logueado)
let loginData = ["usua@gmail.com", true];
console.log("email", loginData[0]);
console.log("esta logueado", loginData[1]);
// las tupas se usan mucho cuando se trabaja con datos estructurados, funciones o apis o estructuras pequeñas que no se necesiten un objeto completo
// enums que permite definir un conjunto de valores con nombre
// enum numerico
var estadoPedido;
(function (estadoPedido) {
    estadoPedido[estadoPedido["pendiente"] = 0] = "pendiente";
    estadoPedido[estadoPedido["enviado"] = 1] = "enviado";
    estadoPedido[estadoPedido["entregado"] = 2] = "entregado";
    estadoPedido[estadoPedido["cancelado"] = 3] = "cancelado"; //3
})(estadoPedido || (estadoPedido = {}));
const estado = estadoPedido.enviado;
console.log(estado);
console.log(estadoPedido[estado]);
// enum con valores personalizaos
var rolUsuarios;
(function (rolUsuarios) {
    rolUsuarios["admin"] = "admin";
    rolUsuarios["cliente"] = "cliente";
    rolUsuarios["repartidor"] = "repartidor";
})(rolUsuarios || (rolUsuarios = {}));
const rol = rolUsuarios.cliente;
console.log(rol);
//enum con condiciones
function verificarAcceso(rol) {
    if (rol === rolUsuarios.admin) {
        console.log("acceso total");
    }
    else {
        console.log("acceso limitado");
    }
}
// union types permite a una variable tener mas de un tipo posible
let variable;
variable = 123;
variable = "hola";
// en una funcion 
function print(id) {
    console.log("tu id es", id);
}
print(42);
print("0de1");
//objeto tipado es un objeto que tiene una estructura definida y segura
const usuario = {
    nombre: "santiago",
    edad: 22
};
function hacerPeticion(metodo) {
    console.log(`haciendo peticion en metodo, ${metodo}`);
}
hacerPeticion('GET');
hacerPeticion('DELETE');
hacerPeticion('POST');
hacerPeticion('PUT');
const estadoActual = 'pendiente';
const alerta = {
    tipo: 'error',
    mensaje: 'algo salio mal'
};
//funcion que valida los permisos
function tienePermiso(rol, accion) {
    if (rol === 'admin')
        return true;
    if (rol === 'editor') {
        return accion === 'crear' || accion === 'editar' || accion === 'eliminar';
    }
    if (rol === 'lector') {
        return accion === 'leer';
    }
    return false;
}
console.log(tienePermiso('admin', 'eliminar')); // ✅ true
console.log(tienePermiso('editor', 'eliminar')); // ❌ false
console.log(tienePermiso('lector', 'leer')); // ✅ true
console.log(tienePermiso('lector', 'crear')); // ❌ false
const sumarr = (a, b) => a + b;
const restarr = (a, b) => a - b;
//funciones que reciben otras funciones
// muy comunes en los callback
function calcular(a, b, operacion) {
    return operacion(a, b);
}
console.log(calcular(5, 3, sumarr));
console.log(calcular(5, 3, restarr));
//funciones que retornan otras funciones 
//se usan en clousure, factories, middlewares
function crearMultiplicador(factor) {
    return function (x) {
        return x * factor;
    };
}
const por2 = crearMultiplicador(2);
const por5 = crearMultiplicador(3);
console.log(por2(10));
console.log(por5(10));
//Tipos genéricos (<T>) y funciones genéricas.
//Es uno de los pilares mas poderosos de typescript: los tipos genericos(<T>) me permite escribir funciones, clases o interfaces reutilizables que funcionan con cualquier tipo, para mantener un tipado fuierte 
// un tipo generico es una plantilla de tipo, en vez de es de usar el tipo exacto como string o number escribes una letra generica como (<T>)
// funcion generica basica 
function devolverLoMismo(valor) {
    return valor;
}
const texto = devolverLoMismo("hola");
const numero = devolverLoMismo(342);
const esValido = devolverLoMismo(true);
const personas = {
    nombre: "santiago",
    edad: 23
};
const admin = {
    id: 1,
    nombre: "leidy",
    rol: "admin",
    activo: true
};
//Type guards: validación con typeof, instanceof.
// son herramientas que permiten validar tipos de tiempo de ejecucion usando condiciones como typeof, instanceof, o incluso funciones personalizadas
//es una verificacion logica en typescript inferir en un tipo mas especifico dentro de un bloque if 
//typeof para tipos primitivos
function imprimir(valor) {
    if (typeof valor === "string") {
        console.log("Es un string", valor.toUpperCase());
    }
    else {
        console.log("es un numero", valor.toFixed(2));
    }
}
//👉 typeof solo funciona con: "string", "number", "boolean", "undefined", "symbol", "bigint", "function", "object"
//🔸 2. instanceof — Para clases
class perro {
    ladrar() {
        console.log("guau");
    }
}
class gato {
    maullar() {
        console.log("miau");
    }
}
function hacerSonido(animal) {
    if (animal instanceof perro) {
        animal.ladrar;
    }
    else {
        animal.maullar;
    }
}
//🧠 Aquí instanceof verifica si el objeto fue creado por una clase específica.
// una clase es una plantilla para crear objetos con propiedades y metodos
// ejemplo de clase y constructor
class personass {
    //el constructor inicializa las propiedad
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy${this.nombre} y tengo ${this.edad} años`);
    }
}
// crea una instancia (objeto)
const personal = new personass("ana", 30);
personal.saludar();
// que pasa en este ejemplo
//class personass = define el modelo 
//contructor() = se ejecuta automaticamente al crear un nuevo objeto
//this.nombre = nombre = asigna los valores a la instancia
//saludar() es un metodo que la clase puede ejecutar
//con valores por defecto 
class producto {
    constructor(nombre, precio = 0) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrar() {
        console.log(`${this.nombre} cuesta $${this.precio}`);
    }
}
const p = new producto("camiseta");
p.mostrar;
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
class libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }
    descripcion() {
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor} en el anio ${this.anio}`);
    }
}
const libro1 = new libro("Clean Code", "Robert C. Martin", 2008);
console.log(libro1.descripcion);
//Modificadores de acceso: public, private, protected.
//controlan que propiedades se puede usar fuera o dentro de la clase 
//public por defecto 
//se puede acceder desde cualquier parte fuera o dentro de la clase
class personasss {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`hola, soy${this.nombre}`);
    }
}
const l = new personasss("santiago");
console.log(l.nombre);
//private
//solo se puede acceder dentro de la clase donde fue declarado 
class CuentaBancaria {
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
    constructor(especie) {
        this.especie = especie;
    }
}
class perritos extends Animal {
    ladrares() {
        console.log(`El ${this.especie} ladra 🐶`);
    }
}
const perross = new perritos("canino");
perross.ladrares(); // ✅ El canino ladra
//Ahora, una clase que implemente esta interfaz debe tener esas propiedades y métodos:
class Carro {
    constructor(marca) {
        this.marca = marca;
    }
    encender() {
        console.log(`El ${this.marca} está encendido 🚗`);
    }
}
//herencia y abstraccion
//herencia
//cuando una clase hereda propiedades y metodos de otra clase
class Animalito {
    constructor(nombre) {
        this.nombre = nombre;
    }
    emitirSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}
// 🐶 Perro hereda de Animal
class Perro extends Animalito {
    ladrar() {
        console.log(`${this.nombre} ladra 🐶`);
    }
}
const miPerro = new Perro("Max");
miPerro.emitirSonido(); // Max hace un sonido
miPerro.ladrar(); // Max ladra 🐶
//que gana la herencia 
//se reutiliza el codigo base no tienes que repetir nombre ni emitirSonido()
//abstraccion
//consiste en ocultar detalles internos y mostrar lo necesario
//en typescript usamos clases abstractas para definir una estructura que no se puede instaciar
class Figura {
    describir() {
        console.log("Soy una figura geométrica");
    }
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
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
function Logger(constructor) {
    console.log("Clase registrada:", constructor.name);
}
let Usuario = (() => {
    let _classDecorators = [Logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Usuario = _classThis = class {
        constructor() {
            console.log("Usuario creado");
        }
    };
    __setFunctionName(_classThis, "Usuario");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Usuario = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Usuario = _classThis;
})();
// Al compilar, se imprime:
// Clase registrada: Usuario
// Usuario creado
