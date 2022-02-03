'use strict';

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const GuessTheNumber = function (x) {
    return function (y) {
        if (y == null) {
            alert("Игра окончена")
        } else {
            if (isNumber(y)) {
                if (y > x) {
                    randNum(prompt("Загаданное число меньше. Введите новое число:"))
                } else if (y < x) {
                    randNum(prompt("Загаданное число больше. Введите новое число:"))
                } else if (y == x) {
                    alert("Поздравляю, вы угадали")
                }
            } else {
                randNum(prompt("Введите число:"))
            }
        }
    }
}

let randNum = GuessTheNumber(Math.floor(Math.random() * 100) + 1)
console.log(randNum(prompt("Угадайте число от 1 до 100:")));