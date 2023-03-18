// запрашиваем у пользователя 3 числа
let firstNumber = cheackValue(Number(prompt('print 1 number ', 1)));
let secondNumber = cheackValue(Number(prompt('print 2 number ', 1)));
let thirdNumber = cheackValue(Number(prompt('print 3 number ', 1)));

// прповерям числа 
function cheackValue(number) {

    while (number == null || isNaN(number)) {

        alert('not corect number')
        number = Number(prompt('enter the number again'));
        console.log(number);
    }
    return number;
}

// выводим результат
alert(`arithmetic mean of given numbers: ${Math.floor(((firstNumber + secondNumber + thirdNumber) / 3), 1)} `);