export const evenNumbers = (array:number[]):number[] => array.filter(number => number % 2 === 0)

export const sumEvenNumbers = (inputArray:number[]):number => {
    const evenArray = evenNumbers(inputArray)
    return evenArray.reduce((acc:number, current:number) => acc + current)
}