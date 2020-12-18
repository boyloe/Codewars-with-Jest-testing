"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductOfNumInArrayExceptIndex = exports.productOfIndexRemovedArrayElements = exports.removeNumberAtCurrentIndex = exports.cloneInputArray = void 0;
const range = require('lodash/range');
exports.cloneInputArray = (array) => {
    return array.slice();
};
exports.removeNumberAtCurrentIndex = (clonedArray, indexToRemove) => {
    clonedArray.splice(indexToRemove, 1);
    return clonedArray;
};
exports.productOfIndexRemovedArrayElements = (clonedArray) => {
    return clonedArray.reduce((acc, current) => acc * current);
};
exports.getProductOfNumInArrayExceptIndex = (inputArray) => {
    const productArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let clonedArray = exports.cloneInputArray(inputArray);
        let indexRemovedArray = exports.removeNumberAtCurrentIndex(clonedArray, i);
        let productAtIndex = exports.productOfIndexRemovedArrayElements(indexRemovedArray);
        productArray.push(productAtIndex);
    }
    return productArray;
};
exports.getProductOfNumInArrayExceptIndex(range(100000));
