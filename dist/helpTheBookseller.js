"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
}
exports.G964 = G964;
G964.stockList = (listOfArt, listOfCat) => {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return "";
    }
    const categoryHashMap = new Map();
    listOfCat.forEach(category => {
        categoryHashMap.set(category, 0);
    });
    const splitArtList = listOfArt.map(entry => {
        return entry.split(' ');
    });
    splitArtList.forEach(entry => {
        categoryHashMap.set(entry[0][0], categoryHashMap.get(entry[0][0]) + parseInt(entry[1]));
    });
    const returnArray = [];
    for (let [key, value] of categoryHashMap.entries()) {
        returnArray.push(`(${key} : ${value})`);
    }
    return returnArray.join(' - ');
};
const listOfArt1 = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
const listOfCat1 = ['A', 'B', 'C', 'D'];
G964.stockList(listOfArt1, listOfCat1);
