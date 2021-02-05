"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicationTable = void 0;
function multiplicationTable(size) {
    const iArray = [];
    const jArray = [];
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
exports.multiplicationTable = multiplicationTable;
multiplicationTable(3);
