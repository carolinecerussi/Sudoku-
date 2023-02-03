const { number } = require("yargs");

function Number() {
  const numArray = [1,2,3,4,5,6,7,8,9];
  console.log(numArray);  
  const min = Math.ceil(numArray[0]);
  const max = Math.ceil(numArray[8]);
  console.log(min);
  console.log(max);
   const random = (Math.floor(Math.random() * (max - min +1) + min)); 
  console.log(random);
}
Number();



//second



