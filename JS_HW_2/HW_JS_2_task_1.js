const minAge = 18; // 1. Создать переменную "minAge" и присвоить ей значение 18
const maxAge = 60; //   2. Создать переменную "maxAge" и присвоить ей значение 60
let age = // 5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61
 // 4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
// - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
// - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
// - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
// - Иначе выводите "Technical work".
if(age < minAge) {
    console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
} else if(age >= minAge && age <= maxAge) {
    console.log("Welcome !");
} else if(age > maxAge) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
 };
