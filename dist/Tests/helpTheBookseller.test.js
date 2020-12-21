const { G964 } = require("../helpTheBookseller")



describe('takes array of books/values, and an array of categories;Returns number of books in each category', () => {
    test('checks to see if inputs are empty arrays', () => {
        expect(G964.stockList([],[])).toBe("")
    })
}
)