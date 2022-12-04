let x
let y
let result


function sum(){
    x = prompt("Введите число(первое слагаемое)");
    y = prompt("Введите число(второе слагаемое)");
    result = Number(x) + Number(y);
    alert(`Сумма ${result}`)
}

function subtraction(){
    x = prompt("Введите число(уменьшаемое)");
    y = prompt("Введите число(вычитаемое)");
    result = x - y;
    alert(`Разность ${result}`)
}

function multiplication(){
    x = prompt("Введите число(первый множитель)");
    y = prompt("Введите число(второй множитель)");
    result = x * y;
    alert(`Произведение ${result}`)
}

function division(){
    x = prompt("Введите число(делимое)");
    y = prompt("Введите число(делитель)");
    result = x / y;
    alert(`Частное ${result}`)
}