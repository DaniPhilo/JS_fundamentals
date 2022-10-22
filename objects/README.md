# Objetos

## ¿Qué es un objeto?
Un objeto es un tipo de dato de JavaScript que sirve para almacenar otros datos (strings, numbers, booleans, arrays, etc.). Sin embargo, los objetos tienen ciertas particularidades.  
A diferencia de los arrays, los objetos no tienen índices para ordenar los datos en su interior y, por lo tanto, tampoco tienen lenght.   
¿Cómo se estructuran los datos dentro de un objeto, entonces? Mediante pares de key / value, es decir, asignando a cada valor un nombre que lo identifica:
```javascript
const user = {
	name: "John",
	lastname: "Doe",
	age: 24,
	isMarried: false
}
```
Como se ve, los obejetos se declaran entre llaves `{}`. Dentro, para cada dato que queramos guardar (el valor o **value**), debemos asignarle un nombre que lo identifique (la clave o **key**): `name: "John"`. El string "John" está guardado bajo la **key** "name" (el nombre de la key se lo damos nosotros, podría ser cualquiera, pero lo suyo es que sea descriptivo de lo que contiene).
De este modo, todos lo datos guardados en un objeto tienen una **key** que les identifica y nos permite acceder a su valor.  

Como decíamos antes, los objetos no tienen índices, y por lo tanto no tienen length:
```javascript
const user = {
	name: "John",
	lastname: "Doe",
	age: 24,
	isMarried: false
}

console.log(user[1]); // undefined
console.log(user.length); // undefined
```

## Acceder y modificar un objeto
Accedemos a un objeto como a cualquier otra variable, y a cada uno de sus valores mediante sus **keys**. Si queremos saber cuál es el `name` del objeto `user`, podemos hacerlo llamando al objeto y especificando la clave con un punto:
```javascript
const user = {
	name: "John",
	lastname: "Doe",
	age: 24,
	isMarried: false
}

console.log(user.name); // "John"
console.log(user.age); // 24
```

Para modificar el valor de un objeto, o crear una nueva propiedad:
```javascript
user.age = 31;
user.friends = ["Peter", "Anna", "Jack"];

console.log(user.age); // 31
console.log(user.friends); // ["Peter", "Anna", "Jack"]
```

## Métodos de objeto
Hay muchos métodos de objeto, por lo que nos centraremos en los más comunes:

### hasOwn()
Con este método podemos preguntar si el objeto tiene una determinada propiedad o **key**. Devuelve un booleano:
```javascript
const cat = {
	name: "Patty",
	legs: 4
}

console.log(Object.hasOwn(cat, "legs")); // true
console.log(Object.hasOwn(cat, "foods")); // false
```

Como habrás visto, el método no se llama sobre el objeto (`cat.hasOwn()`), si no que se aplica sobre `Object` (que es el prototipo general de objeto) y se especifica el objeto particular en los argumentos. Esto será así para todos los métodos de objeto.

### keys()
Devuelve un array con las **keys** del objeto:
```javascript
const cat = {
	name: "Patty",
	legs: 4
}

console.log(Object.keys(cat)); // ["name", "legs"]
```

### values()
Devuelve un array con los valores del objeto:
```javascript
const cat = {
	name: "Patty",
	legs: 4
}

console.log(Object.values(cat)); // ["Patty", 4]
```

### entries()
Devuelve un array que contiene las keys y values del objeto:
Devuelve un array con las **keys** del objeto:
```javascript
const cat = {
	name: "Patty",
	legs: 4
}

console.log(Object.entries(cat)); // [["name", "Patty"], ["legs", 4]]
```