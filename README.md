# JS Fundamentals Exercises

## Numbers

### 1. Escribe una función que calcule el área de un círculo.
```
function areaOfCircle(PI, radius) {
	return
}
```

**bonus track**:  Escribe una función que calcule el perimetro de un círculo.
```
function perimeterOfCircle(PI, radius) {

}
```


### 2. Escribe una función que calcule la velocidad.
```
function calcSpeed(distance, time) {
	return 
}
```


### 3. Escribe una función que genere un número aleatorio en un rango dado (ambos incluidos).
```
function randomNum(minNum, maxNum) {
	return
}
```


### 4. Escribe una función que obtenga los números máximo y mínimo de una lista dada.
La función deve devolver un único string: "Max number is `maxNum` and Min number is `minNum`".
```
function getMaxAndMin(8, 1, 4, 7, 3, 9, 6) {
	return
}
```


### 5. Escribe una función que convierta km en millas (1 milla = 1.60934 km), y que redondee el resultado a la baja.
```
function toMiles(num) {
	return
}
```
**bonus track**:  Ahora, el resultado debe redondearse con 2 decimales (hay un método de numbers para eso: encuéntralo).


### 6. Escribe una función que calcule el área de un prisma de base cuadrada, dada la longitud del lado de su base y la altura de una de sus caras. El área de un prisma es la suma del área de su base más el área de todas sus caras.

lado de la base = 4cm <br>
altura de las caras = 8cm

```
function pyramidArea(length, height) {
	return
}
```



## If / else if / else

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



## Arrays

### 1. Crea el siguiente array: `["January", "February", "Marj", "April", "Mei"]`. 

#### 1.1 Hay dos meses mal escritos: `March` y `May`. Modifica el array usando `[]` para solucionarlo.

#### 1.2 Crea la variable `newMonths` y asígnale el siguiente array:`["June", "July", "August", "September"]`.  A continuación, escribe una función que devuelva un nuevo array que sea la concatenación del array del ejercicio 1 y éste. Asigna el resultado a una nueva variable, llamada `totalMonths`.

#### 1.3 Pushea los siguientes 3 meses en el array anterior (`totalMonths`).



### 4.Crea una función que acepte tres números:
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


### 5. Dado el siguiente array: `['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`

#### 5.1 Escribe una función que:

##### a) Encuentre la posición del string `Wednesday`.

##### b) Si la longitud de ese string es mayor que el número de su posición, dale la vuelta al array.


#### 5.2 Escribe otra función que:

##### a) Compare la longitud de los elementos en primera y segunda posición.

##### b) Si el primero es más corto que el segundo, se debe hacer print de los tres primeros elementos del array (usa el método apropiado para cortar un trozo del array).


#### 5.3 Escribe otra función que:

##### a) Compruebe si el array incluye el string `Sunday`.

##### b) Si es así, print `That's nice!`.

##### c) Si no, print `Oh no!` y añade `Sunday` al final del array.


### 6. Escribe una función que le de la vuelta al string `"Paralelepípedo"`.


### 7. Escribe una función `swap` que tome un array de length 2 y cambie el orden de sus elementos.
Ejemplo:  
La función `swap([a, b])` debe devolver `[b, a]`.


**bonus track**: Este ejercicio puede resolverse de dos maneras: usando un método de array (de cuyo nombre no quiero acordarme), o programando el cambio manualmente, sin usar ningún método de array. Si has resuelto el ejercicio usando un método de array, trata de hacerlo sin usarlo; si lo has resuelto "a mano", busca el método de array que te ayudaría a resolverlo.
