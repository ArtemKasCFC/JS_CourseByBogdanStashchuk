/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Artem',
      mySurname = 'Kasperovich',
      myProfession = 'Qa';

const aboutMe = `My name is ${myName} ${mySurname} and I am a ${myProfession}`;

console.log(aboutMe);