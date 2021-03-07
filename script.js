/* #1 - task -------------------*/
let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"];
for(let i = 1; i < cars.length; i++){
    console.log(cars[i]);
}
/* #2 task ----------------------------*/
let names = ['Nick', 'Ana', 'luca', 'Angelina', 'Nia'];
for(let i = 0; i < names.length; i++){
    if(names[i].length > 3){
        console.log(names[i]);
    }
}
/* #3 - task - ლუწი და კენტი რიცხვები ჼ------------------------*/
let numbers = [24, 17, 10, 4, 50, 33, 8];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0 || numbers[i] % 2 != 0){
        console.log(numbers[i]);
    }
}
/* #4 - task ----------------------------*/
let user = ['name', 'age', 25, 50, 'surname', [100, 500] ];
console.log(user[5][1]);
/* #5 - task ---------------------*/
var person = {
    firstname: 'john',
    lastname: 'doe',
    age: 50,
    eyecolor: 'blue',
  };
  console.log(person.eyecolor);
  /* #6 - task -----------------------------*/
  let array = ['George', 'Age', 29, 'John', 'surname', 200];
  console.log(array);
  /* #7 - task -------------------------------*/
  let array2 = [5, 25, 89, 120, 36];
  numbers.push('javascript', 'python');
  numbers.unshift('html', 'css');
  console.log(numbers);
  numbers.pop();
  numbers.shift();
  console.log(numbers);
  /* #8 task -----------------------------------*/
  let array3 = ['orange', 'banana', 'pear'];
  console.log(array3);
  console.log(array3.length);
  array3.push('apple', 'ananas');
  array3.unshift('watermelon');
  console.log(array3);
  console.log(array3.length);
  array3.splice(2, 0, 'mango');
  array3.pop();
  array3.shift();
  console.log(array3);
  console.log(array3.length);
/* #9 task --------------------------------------*/
let cars2 = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"];
for(let i = 2; i < 6; i++){
    console.log(cars2[i]);
}
let newcars = cars2.slice(1,4);
console.log(newcars);
/* #10 - task -----------------------------*/
let names0 = ['sandro', 'ana', 'lizi', 'aleqsandre', 'nika'];

if(names0.length == 5 && names0[4] == 'nika'){
    console.log('array count:', names0.length);
    console.log('last element is:', names0[4]);
}
else{
    console.log('error');
}
let names01 = ['sandro', 'ana', 'lizi', 'aleqsandre', 'nika', 'nina', 'keti'];

if(names01.length == 7 && names01[0] == 'sandro'){
    console.log('array count:', names01.length);
    console.log('last element is:', names01[0]);
}



