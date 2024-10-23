// Your tests here
import {isPalindrome} from "../utils"
/** 

Try testing some known use-cases first: isPalindrome("racecar") should return true and isPalindrome("car") should return false.
Follow the same workflow we did in the previous lesson:
Understand the feature we're building
Translate the feature into a test specification
Write and implement code that passes the test
Clean up and refactor
Repeat!*/
describe("isPalindrome", ()=>{
    it("returns true if the word is a palindrome", ()=>{
        const word = "racecar"
        expect(isPalindrome(word)).toBe(true)
    })
    it("returns false if the word is not a palindrome", ()=>{
        const word = "car"
        expect(isPalindrome(word)).toBe(false)
    })
})