
//  Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную n + nn + nnn, где n не перемножаются, а конкатенируются

function randomN(min, max) {
    let n = min + Math.random() * (max + 1 - min);
    return Math.floor(n);
  };
  console.log(
    randomN(1, 9)  
    + " " + "+" + " " 
    + (String(randomN(1, 9)) + String(randomN(1, 9))) 
    + " " + "+" + " " 
    + (String(randomN(1, 9)) + String(randomN(1, 9)) + String(randomN(1, 9)))
);