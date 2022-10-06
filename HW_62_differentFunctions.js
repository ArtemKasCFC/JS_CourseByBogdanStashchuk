/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

console.log(firstFunction(1, 2))

// Cannot access 'secondFunction' before initialization
// console.log(secondFunction(1, 2))

function firstFunction(a, b) {
  return a + b
}

const secondFunction = function (a, b) {
  return a + b
}

console.log(firstFunction(5, 5))
console.log(secondFunction(5, 5))


firstFunction = 15
console.log(firstFunction)

// Assignment to constant variable.
// secondFunction = 15
// console.log(secondFunction)
