/* console.log("hi",count);
var count = 42;
let x = 5;

console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);

console.log(typeof []);
console.log(typeof null);
console.log(typeof 123n);console.log(!!"Sheryians");

for(let i=1; i<=10; i++){
    console.log(i);
}
for(let i=1; i<=20; i++){
    if(i%2==0)console.log(i);
}
let str = "Sheryians";
let revStr="";
for(let i=0; i<str.length; i++){
    revStr = str[i]+revStr;
}
console.log(revStr); */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* let sum = 0;
for(let i=0; i < arr.length; i++){
    sum+=arr[i];
}
console.log(sum);

let namne = "Zakaur RAhman"
for(let char of namne){
    console.log(char);
}
let newObject = {
    name: "Zakaur", 
    age: 20,
    gender: "male"
}
for(let key in newObject){
    console.log(key, newObject[key]);
}
*/
const arrSUm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum1 = 0;
arrSUm.forEach((num) => {
  if (num % 2 == 0) sum1 += num;
});
console.log(sum1);
