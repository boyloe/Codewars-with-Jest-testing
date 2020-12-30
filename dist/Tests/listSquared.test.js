const { G964 } = require('../listSquared')

describe('find all numbers in range where sum of divisors squared is also square', () => {
    test('finds the sum of all divisors of a given number', () => {
        expect(G964.listSquared(0,42)).toBe(2500)
    })
})
