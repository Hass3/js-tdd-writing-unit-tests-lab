// Your code here
export function isPalindrome(word){
    const normalWords = word.toLowerCase()
    const reversedWords = normalWords.split('').reverse().join('')
    return normalWords === reversedWords
}