const { getProductOfNumInArrayExceptIndex, cloneInputArray } = require('../getProductOfNumInArrayExceptIndex')


    test('takes in array and for each index returns product of all numbers except number at index', () => {
        expect(getProductOfNumInArrayExceptIndex([1,7,3,4])).toEqual([84,12,28,21])
    })

    test('takes input array and clones a copy', () => {
        expect(cloneInputArray([1,7,3,4])).toEqual([1,7,3,4])
    })

    

