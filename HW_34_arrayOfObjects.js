/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [{
        carBrand: 'BMW',
        price: 30000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Mercedes',
        price: 35000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Audi',
        price: 25000,
        isAvailableForSale: true
    }
]

cars.push({
    carBrand: 'Toyota',
    price: 15000,
    isAvailableForSale: false
})

console.log(cars)