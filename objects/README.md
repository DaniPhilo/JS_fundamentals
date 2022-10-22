# Objetos

## ¿Qué es un objeto?
Un objeto es un **tipo de dato** de JavaScript que sirve para almacenar otros datos (strings, numbers, booleans, arrays, etc.). Sin embargo, los objetos tienen ciertas particularidades.  
A diferencia de los arrays, los objetos **no tienen índices** para ordenar los datos en su interior y, por lo tanto, **tampoco tienen lenght**.   
¿Cómo se estructuran los datos dentro de un objeto, entonces? Mediante pares de **key / value**, es decir, asignando a cada valor un nombre que lo identifica:
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
Devuelve un array que contiene las keys y values del objeto. Cada par de key / value viene en su propio array, por lo que es un array bidimensional (un array con arrays dentro):
```javascript
const cat = {
	name: "Patty",
	legs: 4
}

console.log(Object.entries(cat)); // [["name", "Patty"], ["legs", 4]]
```

## Borrar una propiedad de un objeto
No existe ningún método para borrar propiedades de objetos, pero sí existe el operador `delete`:
```javascript 
const cat = {
    name: "Patty",
    legs: 4
}

delete cat.legs;

console.log(cat); // { name: "Patty" }
```

## Acceder a un objeto con `[]`
A veces no podemos acceder a los valores de un objeto usando el punto (`user.name`, `user.age`). Veamos un ejemplo:
```javascript
const user = {
    "name" = "Paco",
    "lastName-1": "García",
    "lastName-2": "López"
}
```
Si usáramos el punto para acceder a la propiedad `lastName-1`, JS lo leería como una resta y devolvería NaN (not a number), ya que se estaría intentando restar 1 a lastName:
```javascript
console.log(user.lastName-1); // NaN
```
Lo mismo ocurriría si quisiérmos acceder usando una variable:
```javascript
const user = {
    "name" = "Paco"
}

const prop = "name";

console.log(user.prop); // undefined
```
Para estos casos, podemos usar `[]` para acceder a los valores del objeto:
```javascript
const user = {
    "name" = "Paco",
    "lastName-1": "García",
    "lastName-2": "López"
}

const prop = "name"

console.log(user[prop]); // "Paco"
console.log(user["lastName-1"]); // "García"
```

## Loopear un objeto
Dado que los objetos no tienen índices cómo los arrays, puede parecer que no son iterables con un bucle que recorra todas sus propiedades. Pero, esto no es así. Ya hemos visto el método `keys()` que devuelve un array con todas las claves del objeto. Podemos usar ese array para loopear el objeto y sacar todos sus valores:
```javascript
const user = {
    name: "John",
	lastname: "Doe",
	age: 24,
	isMarried: false
}

const keys = Object.keys(user);

for (let i = 0; i < keys.length; i++) {
    console.log(user[keys[i]]);
}
```
Este script irá imprimiendo por consola todos los valores del objeto, usando cada **key** para acceder a ellos.


# Ejercicios de Objetos

## 1. Crea un objeto llamado `citizen1` y dale las propiedades `name`, `lastname` y `age`. Elige tú los valores.

## 2. Una vez creado, añádele la propiedad `city`, con el valor que tú quieras, y cambia el valor de la propiedad `age`. Comprueba que los cambios han surtido efecto.

## 3. Crea una función `checkCitizenship` que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de `18`, añada la propiedad `canVote: true`; de lo contrario, debe añadir `canVote: false`. Usála con el objeto `citizen1`.

## 4. Crea una función llamada `createCitizen`que acepte 3 strings: nombre, apellido y edad. Esta función debe:
    a) Comprobar si los tres parámetros son válidos (no son strings vacíos). Si no son válidos, debe retornar un aviso de que los parámetros son inválidos.
    b) Si los parámetros son válidos, debe retornar un objeto usando como modelo `citizen1`.

## 5. Crea una variable `citizen2` y asígnale como valor el resultado de la función anterior con los parámetros que desees.

## 6. Crea una función `checkVoting` que acepte como parámetro un objeto, compruebe si el objeto en cuestión tiene la propiedad `canVote` y retorne el resultado.

## 7. Modifica la función `checkVoting` para que, si el resultado es negativo (si el objeto no tiene la propiedad `canVote`), se llame a la función `checkCitizenship`. Úsala con `citizen2` y comprueba que funciona.

## 8. Crea la función `showValues` que acepte un objeto e itere sobre él imprimiendo cada uno de sus valores. Pásale a la función `citizen1` y comprueba que funciona.

## 9. Crea la función `deleteLastProp` que acepte un objeto y, si tiene más de 4 propiedades, elimine la última. Si tiene 4 o menos, debe devolver `false`. Pruébala con los objetos `citizen1` y `citizen2`.