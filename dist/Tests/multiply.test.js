const  multiply  = require('../multiply')

test('takes two numbers and returns the product', () => {
    expect(multiply(4,5)).toBe(20)
})
test('takes two numbers and returns the product', () => {
    expect(multiply(8,4)).toBe(32)
})
test('takes two numbers and returns the product', () => {
    expect(multiply(2,5)).toBe(10)
})