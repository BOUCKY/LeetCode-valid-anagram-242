/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const charMap1 = {}
    const charMap2 = {}

    // set i to start at 0. run this code until 1 is no longer less than the length of the word. Every time the code runs, add 1 to i
    for (let i = 0; i < s.length; i++) {
        // let the character = the specific index in the word
        let char1 = s[i]
        let char2 = t[i]
        // if the char is already in our charMap, add 1 to its value
        if (charMap1[char1]){
            charMap1[char1] += 1
        }
        // if char is not already in our charMap, set its value to 1
        else {
            charMap1[char1] = 1
        }
        if (charMap2[char2]){
            charMap2[char2] += 1
        }
        else {
            charMap2[char2] = 1
        }
    }
    console.log(`Word: ${s}`)
    console.log(charMap1)
    console.log(`Word: ${t}`)
    console.log(charMap2)

    // if the length of the words are not the same, it's not an anagram
    if (s.length !== t.length){
        return (`Anagram? ${false}.`)
    }
    // if the length of the words are the same, check the keys and values
    if (s.length == t.length){
        // for each key in charMap1, if the keys and values in charMap2 match, it's an anagram. If they don't match, it's not an anagram.
        for (key in charMap1){
            if (charMap1[key] !== charMap2[key]){
                return (`Anagram? ${false}.`)
            }
        }
    }    
    return (`Anagram? ${true}.`)
};

console.log(isAnagram('anagram', 'nagaram'))
console.log('')
console.log(isAnagram('rat', 'car'))
console.log('')
console.log(isAnagram('test','testing'))