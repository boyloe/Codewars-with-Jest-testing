const { G964 } = require("../helpTheBookseller")



describe('takes array of books/values, and an array of categories;Returns number of books in each category', () => {
    test('checks to see if inputs are empty arrays', () => {
        expect(G964.stockList([],[])).toBe("")
    })

    test('returns category and value of all books in collection', () => {
        expect(G964.stockList([ 'BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600' ],[ 'A', 'B', 'C', 'D' ]))
            .toBe('(A : 0) - (B : 1290) - (C : 515) - (D : 600)')
    })
})

