//  Решить квадратные уравнения. Переменные называть по правилам.
// Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
// 1.  x2 - 6x + 9 = 0. - один корень
// 2.  x2 - 4x - 5 = 0. - два корня

let a1 = 1;
let b1 = -6;
let c1 = 9;
let D1 = b1**2  - 4 * a1 * c1;
let x1 = (-b1 + Math.sqrt(D1))/2 * a1;
console.log("The solution of the equation #1: " + x1);

let a2 = 1;
let b2 = -4;
let c2 = -5;
let D2 = b2**2  - 4 * a2 * c2;
let x2_1 = (-b2 + Math.sqrt(D2))/2 * a2;
let x2_2 = (-b2 - Math.sqrt(D2))/2 * a2;
console.log(x2_2);
console.log("The solutions of the equation #2: " + x2_1 + " " + "&" + " " + x2_2);