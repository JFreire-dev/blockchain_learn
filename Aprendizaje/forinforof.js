let saldos = [
  { nombre: "José", saldo: 30000 },
  { nombre: "Claudia", saldo: 350000, altura: "159 cms" },
  { nombre: "Pato", saldo: 1800 },
  { nombre: "Piluli", saldo: 55555 },
];

//key es la clave, en este caso nombre.
//usuario[key] sería lo que está dentro de aquella clave
//por el ciclo for, recorrerá hasta no encontrar elementos, por tanto avanza a saldo y vuelve a imprimir en una nueva iteración, por eso aparece en otra línea
//esta función es útil para extraer TODOS los datos de UNO de los elementos de la lista de objetos.
//FOR IN SIRVE PARA RECORRER UN OBJETO
function mostrarUsuario(usuario) {
  for (let key in usuario) {
    console.log(`${key}: ${usuario[key]}`);
  }
}

//Esta función utiliza un for of, que sirve para recorrer arreglos
function mostrarTodosLosUsuarios(arr) {
  for (let usuario of arr) {
    console.log(`Nombre:${usuario.nombre} \nSaldo:${usuario.saldo}\n`);
  }
}

//Listar usuarios con saldo menor a 10k
function mostrarUsuariosRiesgosos(arr) {
  console.log(`Listado de usuarios con saldo menor a 10.000\n`);
  for (let usuario of arr) {
    if (usuario.saldo < 10000) {
      console.log(
        `Nombre:${usuario.nombre} está en riesgo de quiebra \nSaldo:${usuario.saldo}`
      );
    }
  }
}

//filtrar con iteraciones
// function filtrarUsuariosRiesgosos(arr) {
//   let riesgosos = [];
//   for (let usuario of arr) {
//     if (usuario.saldo < 10000) {
//       riesgosos.push(usuario);
//     }
//   }
//   return riesgosos;
// }

//metodo filtrar en accion, más limpio
function filtrarUsuariosRiesgosos(arr) {
  return arr.filter((usuario) => usuario.saldo < 10000);
}

let riesgosos = filtrarUsuariosRiesgosos(saldos);
console.log("Usuarios riesgosos:\n");
mostrarTodosLosUsuarios(riesgosos);
