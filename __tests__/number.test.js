
describe('Number', () => {
    
    test('should correctly return the array of numbers included in sudoku with min and max values' , () => {
        const numArray = [1,2,3,4,5,6,7,8,9];
        const min = numArray[0];
        const max = numArray[8];
        const number = new Number(numArray);
        expect(min).toEqual(1);
        expect(max).toEqual(9);
        expect(number);
    })
    test('should correctly return a randomized number from the numArray' , () => {
            const numArray = [1,2,3,4,5,6,7,8,9];
            const min = Math.ceil(numArray[0]);
            const max = Math.floor(numArray[8]);
           const randomNum = Math.floor(Math.random() * (max -min +1) + min);
        const number = Number(randomNum);
        expect(number);
    })
})