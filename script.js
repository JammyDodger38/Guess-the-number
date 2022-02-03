'use strict';

let randNum

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const newGame = function() {
    randNum = GuessTheNumber(Math.floor(Math.random() * 100) + 1, 10)
    randNum(prompt("Угадайте число от 1 до 100:"))
}

const GuessTheNumber = function (x, NumTry) {
    return function (y) {
        if (y == null) {
            alert("Игра окончена")
        } else {
            if (isNumber(y)) {
                NumTry--
                if (y > x) {
                    if (NumTry == 0) {
                        if (confirm("Попытки закончились, хотите сыграть еще?")) {
                            newGame()
                        } else {
                            alert("До скорой встречи!")
                        }
                    } else {
                        randNum(prompt("Загаданное число меньше, осталось попыток - " + NumTry + ". Введите новое число:"))
                    }
                } else if (y < x) {
                    if (NumTry == 0) {
                        if (confirm("Попытки закончились, хотите сыграть еще?")) {
                            newGame()
                        } else {
                            alert("До скорой встречи!")
                        }
                    } else {
                        randNum(prompt("Загаданное число больше, осталось попыток - " + NumTry + ". Введите новое число:"))
                    }
                } else if (y == x) {
                    if (confirm("Поздравляю, вы угадали! Хотели бы сыграть ещё?")) {
                        newGame()
                    } else {
                        alert("До скорой встречи!")
                    }
                }
            } else {
                randNum(prompt("Введите число:"))
            }
        }
    }
}

newGame()