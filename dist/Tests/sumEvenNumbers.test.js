import { evenNumbers } from '../sumEvenNumbers'


describe('takes an array of numbers and returns the sum of the even numbers', () =>{
    test('takes array and returns the even numbers', () => {
        expect(evenNumbers([1,2,3,4,5,6])).toEqual([2,4,6])
    })
})