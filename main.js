
var word = prompt('Enter any word:')

var wordCount = word.length
var thirdChar = word[2]
var wordLower = word.toLowerCase()
var wordUpper = word.toUpperCase()
var wordSentence = "You are an awesome " + word + "!"
var subWord = word[1] + word[2] + word[3]

var wordBlock = "You entered: " + word + " \n \
                There are " + wordCount + " characters in the word. \n \
                The third character is '" + thirdChar + "' \n \
                Lowercase: " + wordLower + " \n \
                Uppercase: " + wordUpper + " \n \
                Example: " + wordSentence + " \n \
                Subword: " + subWord

alert (wordBlock)


