// Your tests here
import {isPalindrome} from "../utils"
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