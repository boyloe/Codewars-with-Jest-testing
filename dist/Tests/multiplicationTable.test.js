const { multiplicationTable } = require("../muliplicationTable");

test("takes a number, N and creates and N x N multiplication table", () => {
    expect(multiplicationTable(3)).toEqual([
        [1, 2, 3],
        [2, 4, 6],
        [3, 6, 9],
    ]);
});
