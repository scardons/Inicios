  //que es tsconfig.json

  //Es el archivo que configura typescript. Le dice a typescript como compila tu proyecto: que reglas seguir, que archivos incluir, a que version de javascript transpilar, entre otras cosas 

  //estructura basica
//   {
//     "compilerOptions": {
//       "target": "ES2020",
//       "module": "commonjs",
//       "strict": true,
//       "outDir": "dist",
//       "rootDir": "src",
//       "esModuleInterop": true
//     },
//     "include": ["src"],
//     "exclude": ["node_modules"]
//   }
  
// Opción	Qué hace
// "target"	A qué versión de JS compilar (ES5, ES6, ES2020, etc).
// "module"	Sistema de módulos (commonjs, esnext, etc).
// "strict"	Activa todas las reglas estrictas de TS (¡recomendado!).
// "outDir"	Carpeta donde se generará el JS (dist, por ejemplo).
// "rootDir"	Carpeta donde están tus archivos TS (src, por ejemplo).
// "esModuleInterop"	Permite importar módulos de CommonJS como si fueran ESModules (útil con require).
// "forceConsistentCasingInFileNames"	Evita errores con nombres de archivos en diferentes sistemas (Linux vs Windows).

// como crear un proyecto 
//npx tsc --init