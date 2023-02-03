

export function Number() {
const numArray = [1,2,3,4,5,6,7,8,9];
new number = Number(numArray)
return numArray;
}
//first test

export function Number(){
    const numArray = [1,2,3,4,5,6,7,8,9];
    const min = Math.ceil(numArray[0]);
    const max = Math.floor(numArray[8]);
   const randomNum = Math.floor(Math.random() * (max -min +1) + min);
const number = Number(randomNum);
expect(number);
}

//second



