export const cloneInputArray = (array:number[]) => {
    return array.slice()
}

export const removeNumberAtCurrentIndex = (clonedArray:number[],indexToRemove:number):number[] => {
    clonedArray.splice(indexToRemove, 1)
    return clonedArray
} 

export const productOfIndexRemovedArrayElements = (clonedArray:number[]):number => {
    return clonedArray.reduce((acc:number,current:number):number => acc * current )
}

export const getProductOfNumInArrayExceptIndex = (inputArray:number[]):number[] => {
    const productArray:number[] | undefined = []
    for (let i:number = 0; i < inputArray.length; i++) {
        let clonedArray = cloneInputArray(inputArray)
        let indexRemovedArray = removeNumberAtCurrentIndex(clonedArray, i)
        let productAtIndex = productOfIndexRemovedArrayElements(indexRemovedArray)
        productArray.push(productAtIndex)
    }
    return productArray
}



