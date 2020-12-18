const { getProductOfNumInArrayExceptIndex, cloneInputArray, removeNumberAtCurrentIndex, productOfIndexRemovedArrayElements } = require('../getProductOfNumInArrayExceptIndex')


    test('takes in array and for each index returns product of all numbers except number at index', () => {
        expect(getProductOfNumInArrayExceptIndex([1,7,3,4])).toEqual([84,12,28,21])
    })

    test('takes input array and clones a copy', () => {
        expect(cloneInputArray([1,7,3,4])).toEqual([1,7,3,4])
    })

    test('takes an array and index, removes number at index and returns new array', () => {
        expect(removeNumberAtCurrentIndex([1,7,3,4], 0)).toEqual([7,3,4])
    })

    test('takes an array and returns the product of all elements in the array', () => {
        expect(productOfIndexRemovedArrayElements([7,3,4])).toBe(84)
    })

    

