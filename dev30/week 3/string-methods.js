// toUpperCase
var sent1 = "Ryan Woods"
console.log(sent1.toLocaleUpperCase())
// toLowerCase
var sent2 = "Ryan Woods"
console.log(sent2.toLowerCase())
// charAt
var originalString = 'annie'
var substring = originalString.substring(1,originalString.length)
var indexToChange = 0

var newCharacter = originalString.charAt(indexToChange).toUpperCase()

console.log(newCharacter + originalString)

console.log(newCharacter)
console.log(substring)
console.log(newCharacter + substring)

// includes
var sentence = "The quick brown bear jumps over the lazy dog."
var word = 'fox'

console.log(sentence.includes(word))
