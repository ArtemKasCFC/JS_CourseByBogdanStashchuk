/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    sum() {
        return this.reduce((acc, cur) => acc + cur)
    }
    onlyNumbers() {
        return this.filter(el => typeof el === 'number')
    }
}

let extendedArray = new ExtendedArray(null, 6, 4, true, 2, 'cat')
extendedArray.forEach(el => console.log(el))

extendedArray = extendedArray.onlyNumbers()
console.log(extendedArray)

extendedArray = extendedArray.sum()
console.log(extendedArray)

