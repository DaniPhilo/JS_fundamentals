# Teoría: Arrays

## ¿Qué es un array?
Podemos pensar en un array como una colección de elementos que pueden almacenarse bajo una única variable (más info [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)). Los arrays tienen las siguientes propiedades, entre otras:
- Pueden albergar diferentes tipos de datos (strings, numbers, booleans, objects... u otros arrays).
- Su longitud (length) puede variarse, haciéndolo más corto o más largo.
- Los arrays tienen índices que señalan la posición de los diversos elementos que contienen. La primera posición tiene índice 0, la segunda 1, etc.
- Los arrays tienen una serie de métodos que nos permiten realizar diferentes operaciones con ellas.


## Declaración de un array
Un array puede declararse de diversas formas. La más sencilla es hacerlo asignándolo directamente a una variable:
```
const myArray = ["red", 22, true];
```
También podemos usar el [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array):
```
const cities = new Array("Madrid", "Barcelona");

console.log(cities); // ["Madrid", "Barcelona"]
```

## Acceso y modificación de un array mediante su índice
Podemos acceder a cualquier elemento de un array, siempre que conozcamos su índice (su posición dentro del array), del siguiente modo:
```
const cities = ["Madrid", "Barcelona"];

console.log(cities[1]); // "Barcelona"
```

De un modo similar, podemos reasignar un valor a dicha posición:
```
cities[1] = "Toledo";

console.log(cities); // ["Madrid", "Toledo"]
```

## Métodos de array
Existen multitud de [métodos de array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods). Nos centraremos en los más usuales.

### Métodos que no modifican el array:
Estos métodos dejan intacto el array sobre el que se aplican.

#### length
Devuelve la longitud del array (la cantidad de elementos que contiene):
```
const cities = ["Madrid", "Barcelona"];

console.log(cities.length); // 2
```

#### indexOf()
Devuelve la posición de un elemento en particular:
```
const cities = ["Madrid", "Barcelona"];

console.log(cities.indexOf("Madrid")); // 0
```

#### includes()
Devuelve un booleano en función de si el array contiene, o no, el elemento por el que hemos preguntado:
```
const cities = ["Madrid", "Barcelona"];

console.log(cities.includes("Madrid")); // true
console.log(cities.includes("Valencia")); // false
```

### slice()
Devuelve una copia del segmento del array que le indiquemos. Para indicar el segmento, le pasaremos al método dos números: 1) la posición de inicio; 2) la posición en la que se detendrá (no incluida):
```
const cities = ["Madrid", "Barcelona", "Toledo", "Valencia", "Sevilla", "Zaragoza"];

console.log(cities.slice(0, 3)); // ["Madrid", "Barcelona", "Toledo"] (posiciones del 0 al 2 (el 3 no está incluido))
console.log(cities.slice(2, 4)); // ["Toledo", "Valencia"] (posiciones del 2 al 3 (el 4 no está incluido))
```

## Métodos que modifican el array original
Estos métodos sí alteran el array sobre le que se aplican.

### push()
Añade uno o más elementos al **final** del array y devuelve la nueva longitud del array:
```
const cities = ["Madrid", "Barcelona"];

const count = cities.push("Valencia");

console.log(count); // 3
console.log(cities); // ["Madrid", "Barcelona", "Valencia"]
```
```
const fruits = ["apple", "banana"];

const count = fruits.push("orange", "grape");

console.log(count); // 4
console.log(fruits); // ["apple", "banana", "orange", "grape"]
```


### pop()
Elimina el **último** elemento de un array y devuelve dicho elemento:
```
const cities = ["Madrid", "Barcelona", "Valencia"];

const removed = cities.pop();

console.log(removed); // "Valencia"
console.log(cities); // ["Madrid", "Barcelona"]
```

### unshift()
Añade uno o más elementos al **comienzo** del array y devuelve la nueva longitud del array:
```
const cities = ["Madrid", "Barcelona"];

const count = cities.unshift("Valencia", "Toledo");

console.log(count); // 4
console.log(cities); // ["Valencia", "Toledo", "Madrid", "Barcelona"]
```

### shift()
Elimina el **primer** elemento de un array y devuelve dicho elemento:
```
const cities = ["Madrid", "Barcelona", "Valencia"];

const removed = cities.shift();

console.log(removed); // "Madrid"
console.log(cities); // ["Barcelona", "Valencia"]
```

### splice()
El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.  
El primer parámetro indica la posición (índice) en el que realizar el cambio.  
El segundo parámetro indica cuántos elementos (si hay alguno) deben eliminarse a partir de la posición indicada en el anterior parámetro.
El tercer parámetro indica qué elemento se va a introducir en el array en el índice indicado pior el primer parámetro.
```
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

## Métodos de conversión
Una array puede convertirse en un string, y un string en array, del siguiente modo:

### join()
El método join() une todos los elementos de un array en un string y devuelve este string. Puede especificarse qué carácter va a separar cada elemento (o no especificar ninguno):
```
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"

console.log(elements.join('')); // "FireAirWater"

console.log(elements.join('-')); // "Fire-Air-Water"
```

### split()
Realiza el proceso inverso a join(). Este método acepta como parámetro un patrón y convierte un string en un array buscando dicho patrón. El método devuelve el nuevo array:
```
const str = "Pedro es un chico muy alto.";

const words = str.split(' ');
console.log(words); // ["Pedro", "es", "un", "chico", "muy", "alto."]

const chars = str.split('');
console.log(chars); // ['P', 'e', 'd', 'r', 'o', ' ', 'e', 's', ' ', 'u', 'n', ' ', 'c', 'h', 'i', 'c', 'o', ' ', 'm', 'u', 'y', ' ', 'a', 'l', 't', 'o', '.']

const strCopy = str.split();
console.log(strCopy); ["Pedro es un chico muy alto."]
```


# Ejercicios de Arrays

### 1. Crea el siguiente array: `["January", "February", "Marj", "April", "Mei"]`. 

#### 1.1 Hay dos meses mal escritos: `March` y `May`. Modifica el array usando `[]` para solucionarlo.

#### 1.2 Crea la variable `newMonths` y asígnale el siguiente array:`["June", "July", "August", "September"]`.  A continuación, escribe una función que devuelva un nuevo array que sea la concatenación del array del ejercicio 1 y éste. Asigna el resultado a una nueva variable, llamada `totalMonths`.

#### 1.3 Añade los siguientes 3 meses ("October", "Noember", "December") al final del array anterior (`totalMonths`).



### 2.Crea una función que acepte tres números:
```
function changeArray(num1, num2, num3) {

}
```

### Ahora vamos a trabajar con el array `totalMonths`:
#### a) Si el primer número es mayor que el segundo, elimina el último elemento del array.

#### b) O bien, si el segundo número es mayor que el tercero, pero menor que `10`, elimina el primer elemento del array.

#### c) O bien, si el segundo número es mayor que el tercero o que el primero, añade el string `October` al final del array.

#### d) Si nada de lo anterior es verdadero, print `Bad luck!`.

#### e)  Print el array `totalMonths`.

#### Llama a `changeArray(9,  7,  5)` // ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
#### Llama a `changeArray(4,  7,  5)` // ['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
#### Llama a `changeArray(5, 24, 8)` // ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'October']
#### Llama a `changeArray( 7, 7, 7)` // "Bad luck!"


### 3. Dado el siguiente array: `['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`

#### 3.1 Escribe una función que:

##### a) Encuentre la posición del string `Wednesday`.

##### b) Si la longitud de ese string es mayor que el número de su posición, dale la vuelta al array.


#### 3.2 Escribe otra función que:

##### a) Compare la longitud de los elementos en primera y segunda posición.

##### b) Si el primero es más corto que el segundo, se debe hacer print de los tres primeros elementos del array (usa el método apropiado para cortar un trozo del array).


#### 3.3 Escribe otra función que:

##### a) Compruebe si el array incluye el string `Sunday`.

##### b) Si es así, print `That's nice!`.

##### c) Si no, print `Oh no!` y añade `Sunday` al final del array.


### 4. Escribe una función que le de la vuelta al string `"Paralelepípedo"`.


### 5. Escribe una función `swap` que tome un array de length 2 y cambie el orden de sus elementos, pero devolviendo el mismo array.
Ejemplo:  
La función `swap([a, b])` debe devolver `[b, a]`.


**bonus track**: Este ejercicio puede resolverse de dos maneras: usando un método de array (de cuyo nombre no quiero acordarme), o programando el cambio manualmente, sin usar ningún método de array. Si has resuelto el ejercicio usando un método de array, trata de hacerlo sin usarlo; si lo has resuelto "a mano", busca el método de array que te ayudaría a resolverlo.