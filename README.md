# JS Fundamentals Exercises

## Numbers

### 1. Write a function that calculates the area of a circle
```
function areaOfCircle(PI, radius) {
	return
}
```

**bonus track**:  Write a function that calculates the perimeter of a circle
```
function perimeterOfCircle(PI, radius) {

}
```


### 2. Write a function that calculates speed
```
function calcSpeed(time, distance) {
	return 
}
```


### 3. Write a function that calculates a random number in a given range
```
function randomNum(minNum, maxNum) {
	return
}
```


### 4. Write a function that gets the max and min numbers in a list
Answer must be a single string: "Max number is -maxNum- and Min number is -minNum-"
```
function getMax(1, 4, 7, 3, 9, 6) {
	return
}
```


### 5. Write a function that converts from km to miles (1 mile = 1.60934 km), and rounds it down
```
function toMiles(num) {
	return
}
```
**bonus track**:  Now, the result must be rounded to 2 decimals (there's a method for that: find it)


### 6. Write a function that calculates the area of a square pyramid, given its base length and face height. The area of a pyramid is the sum of the area of its base plus the area of its faces.
base length = 4cm
face height = 8cm

```
function pyramidArea(length, height) {
	return
}
```



## If / else if / else

### 1. Write a function that accepts a number and returns a string stating whether the number is even or odd. 
 Expected result: `The number is [even]/[odd]`


### 2. Write a function that accepts two numbers and returns the largest one, or whether they are equal
 Expected result: `The largest number is [number]`
 Or: `The numbers are equal`


**bonus track**:  Now it has to accept 3 numbers


### 3. Write a function that accepts the length of the three sides of a triangle. It must then return whether the triangle is equilateral, scalene or isosceles
Expected result: `The triangle is [equilateral]/[scalene]/[isosceles]`


### 4. Write a function that checks whether a number is within a given range
```
function isInRange(start, end) {
	return [true]/[false]
}
```


### 5. Write a function that evaluates an arithmetic operation and returns its result
```
function evalOperation(num1, num2, operation) {
	return
}
```
Expected result:
1.  Print result of `num1 + num2` if operation is “add”
2.  Print result of `num1 - num2` if operation is “subtract”
3.  Print result of `num1 * num2` if operation is “multiply”
4.  Print result of `num1 / num2` if operation is “divide”
5.  Print result of `num1 % num2` if operation is “modulus”
6.  Else print `Invalid operation`


### 6. Write a function that accepts a year and returns whether  it's a leap year or not
```
function isLeapYear(year) {
	return [true]/[false]
}
```


### 7. Write a function that accepts the number of a month (1 - 12) and returns the number of days of said month.
Expected result: `The month has [number of days] days`

**bonus track** Now the function accepts a month and a year, and should count with whether it's a leap year or not (use the function you wrote in ex. 6)



## Arrays

### 1. Take this array `["January", "February", "Marj", "April", "Mei"]`. 

#### 1.1 There's a typo in "March" and "May". Fix it and assign the fixed array to a new variable called `fixedMonths`.

#### 1.2 Create a variable called `newMonths` and assign it this array:`["June", "July", "August", "September"]`.  Then write a function that returns a new array that is the concatenation of array from ex. 1 and this one. Assign it to a new variable called `totalMonths`.

#### 1.3 Push the last three months into the last array. One at a time.



### 4. Make a function that accepts three numbers:
```
function changeArray(num1, num2, num3) {

}
```

### Now you will change `totalMonths` array:
#### a) If the first number is greater than the second one, remove the last item of the array.

#### b) Or if the second number is greater than the third one, but less than `10`.

#### c) Or if second number is greater than the third one or greater than the first one, add the string `October` to the array.

#### d) If none of the above if true, print `Bad luck!`.

#### e)  Print `totalMonths` array.

#### Call `changeArray(9,  7,  5)`
#### Call `changeArray(4,  7,  5)`
#### Call `changeArray(5, 24, 8)`
#### Call `changeArray( 7, 7, 7)`


### 5. Given this array: `['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`

#### 5.1 Make a function that:

##### a) Finds the position of the string `Wednesday`.

##### b) If the length of that string is greater than the position number, reverse the array.


#### 5.2 Make another function that:

##### a) Compares the length of the element in the first position, and the element in the second position.

##### b) If the first one is shorter than the second one, it sould print just the first three elements of the array.


#### 5.3 Make another function that:

##### a) Checks if the array includes the string `Sunday`.

##### b) If true, print `That's nice!`.

##### c) If not, print `Oh no!` and then add `Sunday` to the array.


### 6. Make a function to reverse the string `"Paralelepípedo"`.