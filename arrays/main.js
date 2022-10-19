// *** ARRAYS ***

// let array = ["daniel", 23, true, "pablo", false];

// Access and modify the array by position
// array[0] // "daniel"
// array[2] // true

// array[0] = "pedro" // ["pedro", 23, true, "pablo", false]

// Access a portion of the array
// array.slice(0, 2) // ["daniel", 23]
// array.slice(2, 4) // `true, "pablo"

// Methods to modify arrays
// array.push("newString") // Add to the last position: ["daniel", 23, true, "pablo", false, "newString"]
// array.pop() // Remove from last position: ["daniel", 23, true, "pablo"]
// array.unshift("newString") // Add to first position: ["newString", "daniel", 23, true, "pablo", false]
// array.shift() // Remove from first position: [23, true, "pablo", false]

// Splice
// array.splice(1, 2, "newString") // ["daniel", "newString", true, "pablo", false]
// Arguments: (start in this index, remove this number of elements, add this element)

// Join / split
// let string = "pedro es muy alto";
// let array = ["hello", "world"];
// string.split("") // ['p', 'e', 'd', 'r', 'o', ' ', 'e', 's', ' ', 'm', 'u', 'y', ' ', 'a', 'l', 't', 'o']
// string.split(" ") // ["pedro", "es", "muy" "alto"]

// array.join("") // "helloworld"
// array.join(" ") // "hello world"