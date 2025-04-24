const arreglo = ["Textico", 458.8, true, { prop: "hola objeto" }, [1, 2, 3]];
console.log(arreglo);

const friends = ["Jairo", "Julio", "Hurtado"];
console.log(friends[2]);

const colores = [];
colores[0] = "rojo";
colores[1] = "verdemelomuerde";
colores[3] = "blanco"; //esta no es la forma optima de agregar valores a un arreglo
colores[3] = "amarillo"; //se sobreescribe el valor

colores.push("azulito");
//los arreglos realmente son objetos en js, por eso podemos utilizar métodos de este objeto
console.log(colores.length);
