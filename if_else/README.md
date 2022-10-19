# Teoría: If / else if / else

## ¿Qué son?
Las sentencias (statements) `if...else` son una instrucción que nos permite manejar la toma de decisiones de nuestro código. Podemos pensar en ellos como en controladores de toma de decisioines.

En una sentencia `if...else`, decidiremos si un bloque de código va a ejecutarse en función de una condición (`if`), que debe ser siempre verdadera (`true`). En caso de que sea falsa (`false`), no se ejecutará ese bloque, y podremos decidir qué se ejecuta en su lugar (`else`).
```
if (condicion es verdadera) {
   // el código se ejecuta
} else {
   // el código se ejecuta
}
```

## Ejemplos
En este ejemplo, al ser la nota mayor o igual que 5, se ejecutará la instrucción que se encuentra dentro del bloque `if`. De lo contrario, se ejecutaría la instrucción presente en `else`.
```
const grade = 7;

if (grade >= 5) {
    console.log('Has aprobado!')
}
else {
    console.log('Has suspendido...)
}
```

### Else if
Puedes concatenar multiples condiciones usando `else if`. 
```
if (la condición 1 es verdadera) {
   // el código se ejecuta
} else if (la condición 1 NO es verdadera, pero la condición 2 es verdadera) {
  // el código se ejecuta
} else {
   // el código se ejecuta
}
```

Ejemplo:
```
const grade = 9.5;

if (grade >= 5 && grade <= 8) {
    console.log('Has aprobado!);
}
else if (grade >= 9) {
    console.log("Has sacado muy buena nota!!");
}
else {
    console.log("Has suspendido");
}
```
En este caso, la condición del primer `if` no se cumple, por lo que pasa al `else if`. Al cumplirse esta condición, se ejecutaría ese bloque de código.

### Doble `return`
Cuando escribimos funciones, debemos retornar un valor de la función usando `return`. Este `return` no sólo sirve para devolver un valor: también finaliza la ejecución de la misma inmediatamente.

Ejemplo:
```
// function evalNum(num) {
//     if (num > 0) {
//         return console.log('Num es mayor que 0');
//     }
//     if (num > 5) {
//         return console.log('Num es mayor que 5');
//     }
// }

// evalNum(10);
```

En este caso, lo único que se ejecutaría es el bloque de código del primer `if`, ya que al hacer el `return`, la función finaliza su ejecución y nunca llega a leer el segundo `if`.

### Operador ternario
Si tienes una sentencia `if...else` simple, quizás quieras usar el operador ternario, ya que simplifica mucho la forma de escribir los condicionales. Su forma es la siguiente:
```
condicion ? si la condicion es verdadera : si la condicion es falsa
```

Ejemplo:
```
// function evalNum(num) {
//     return num > 5 ? true : false;
// }

// evalNum(10); // devuelve `true`;
// evalNum(3); // devuelve `false`;
```

Ten en cuenta que puede usarse para declarar variables también:
```
const age = 23;
const ciudadano = age >= 18 ? true : false;

console.log(ciudadano); // true
```

Links útiles:
- [Sentencias condicionales en JS](https://www.freecodecamp.org/espanol/news/javascript-if-else-y-if-then-sentencias-condicionales-en-js/#:~:text=El%20if...else%20es,false%20en%20las%20sentencias%20if%20.).
- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).


# Ejercicios de If / else if / else

### 1. Escribe una función que acepte un número y devuelva un string afirmando si el número es par o impar.
 Resultado esperado: `The number is [even]/[odd]`.


### 2. Escribe una función que acepte dos números y devuelva cuál es el mayor, o bien si son iguales.
 Resultado esperado: `The largest number is [number]`.
 O: `The numbers are equal`.


**bonus track**:  Igual, pero ahora con tres números


### 3. Escribe una función que acepte la longitud de los tres lados de un triángulo y devuelva si el triángulo es equilatero, escaleno o isósceles.
Resultado esperado: `The triangle is [equilateral]/[scalene]/[isosceles]`.


### 4. Escribe una función que determine si un número dado se encuentra dentro de un rango dado.
```
function isInRange(num, start, end) {
	return [true]/[false]
}
```


### 5. Escribe una función que permita realizar cualquiera de las cuatro operaciones matemáticas básicas.
```
function evalOperation(num1, num2, operation) {
	return
}
```
Resultado esperado:
1.  Print el resultado de `num1 + num2` si la operación es “add”.
2.  Print el resultado de `num1 - num2` si la operación es “subtract”.
3.  Print el resultado de `num1 * num2` si la operación es “multiply”.
4.  Print el resultado de `num1 / num2` si la operación es “divide”.
5.  Print el resultado de `num1 % num2` si la operación es “modulus”.
6.  Si no se cumple ninguna de las anteriores, print `Invalid operation`.

- Ejemplo:
````
function evalOperation(2, 3, "add")
````
Debería devolver `5` (2 + 3).

Pero:
````
function evalOperation(2, 3, "substract")
````
Debería devolver `-1` (2 - 3).


### 6. Escribe una función que devuelva si un año dado es año bisiesto o no.
```
function isLeapYear(year) {
	return [true]/[false]
}
```


### 7. Escribe una función que acepte el número de mes (1 - 12) y devuelva el número de días de ese mes.
Resultado esperado: `The month has [number of days] days`.

**bonus track** Ahora, la función debe aceptar un mes y un año, y debe contar con que el año pueda ser bisiesto (usa la función que escribiste en el ej. 6).