function getEmployeeInfo(employeesName) { // 1. Создайте функцию getEmployeeInfo() // 4. Функция должна принимать 1 аргумент - имя сотрудника
    const employeesNames = ["Vera", "VaVlad", "Alina", "Sara", "David"]; // 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
    const employeesSalaries = [2580, 3000, 2000, 2600, 2655]; // 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
    let employeesData = [employeesName];
 if(!(employeesNames.includes(employeesName))){
 return null; // 8. Если такое имя сотрудника в массиве не найдется - вернуть null
} else {
    let employeesIndex = employeesNames.indexOf(employeesName); // 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. 
    employeesData.push(employeesSalaries[employeesIndex]); // Зарплату взять с ТЕМ ЖЕ индексом что и имя // 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
}
return employeesData; // 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
};

console.log(getEmployeeInfo("Sara"));
console.log(getEmployeeInfo("Sana"));