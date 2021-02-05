export function multiplicationTable(size: number): number[][] {
    const iArray: number[][] = [];
    const jArray: number[] = [];
    for (let i = 1; i <= size; i++) {
        iArray.push(jArray);
        jArray.length = 0;
        for (let j = 1; j <= size; j++) {
            jArray.push(i * j);
        }
    }
    console.log(iArray);
    return iArray;
}

multiplicationTable(3);
