// const minAge = 18; //  1.1 Создать переменную "minAge" и присвоить ей значение 18
// const maxAge = 60; //  1.2 Создать переменную "maxAge" и присвоить ей значение 60
// let age; // 1.3 Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
 // 1.4 Создать switch в котором будете проверять весь код переменной age со следующими условиями:
// - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
// - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
// - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
// - Иначе выводите "Technical work".
// 

// age = "aaa"; // 2.2Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
// switch (true) {
//     case typeof age !== "number": // 2.1 Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных.   И если он не number - кидалась ошибка в консоль. 
//     console.log("Oops! The value is NaN. Please try again!");
//     break;

//     case (age < minAge) : 
//     console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
//     break;

//     case (age >= minAge && age <= maxAge):
//     console.log("Welcome !");
//     break;

//     case (age > maxAge) : 
//     console.log("Keep calm and look Culture channel");
//     break;

//     default:
//     console.log("Technical work");

// };
// 3. Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number
const minAge = 18; 
const maxAge = 60;
let age;
age = "18"; 
const numberedAge = age*1; // 3. Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number
switch (true) {
    case typeof (numberedAge) !== "number":
    console.log("Oops! The value is NaN. Please try again!");
    break;

    case (age < minAge) : 
    console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
    break;

    case (age >= minAge && age <= maxAge):
    console.log("Welcome !");
    break;

    case (age > maxAge) : 
    console.log("Keep calm and look Culture channel");
    break;

    default:
    console.log("Technical work");
};