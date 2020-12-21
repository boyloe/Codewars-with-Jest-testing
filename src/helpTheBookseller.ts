export class G964 {
    public static stockList = (listOfArt:string[], listOfCat:string[]):any => {
        if (listOfArt.length === 0 || listOfCat.length === 0) {
            return ""
        }
        const categoryHashMap = new Map()

        listOfCat.forEach(category => {
            categoryHashMap.set(category, 0)
        })
        const splitArtList:string[][] = listOfArt.map(entry => {
            return entry.split(' ')
        })
        splitArtList.forEach(entry => {
            categoryHashMap.set(entry[0][0], categoryHashMap.get(entry[0][0]) + parseInt(entry[1])) 
        });
            const returnArray:string[] = []
            for (let [key,value] of categoryHashMap.entries()) {
                if (!Number.isNaN(value) )
                returnArray.push(`(${key} : ${value})`)
            }
            return returnArray.join(' - ')
    }
}

const listOfArt1:string[] = [ 'BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600' ] 
const listOfCat1:string[] = [ 'A', 'B', 'C', 'D' ]

G964.stockList(listOfArt1, listOfCat1)