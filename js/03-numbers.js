/* # Модуль 4. Заняття 8. Перебираючі методи масиву */

//## Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
    ## Example 1 - Метод map
    Нехай функція `getModels` повертає масив моделей (поле model) всіх
    автомобілів.
    const getModels = cars => {};
    console.table(getModels(cars));
*/

//v1
// const getModels = (cars) => {
//   const result = cars.map((car) => {
//     return car.model;
//   });
//   return result;
// };

//v2
// const getModels = (cars) => cars.map(({model}) => model);

// console.table(getModels(cars));
/*
 */
/*
    ## Example 2 - Метод map
    Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
    значенням властивості `price` залежно від переданої знижки.
    const makeCarsWithDiscount = (cars, discount) => {};
    console.table(makeCarsWithDiscount(cars, 0.2));
    console.table(makeCarsWithDiscount(cars, 0.4));
*/

// price * 0.2 - знижка
// price - (знижка)

//v1
// const makeCarsWithDiscount = (cars, discount) => {
//   const result = cars.map((car) => {
//     const discountPrice = car.price - car.price * discount;

//     return {
//       ...car,
//       price: discountPrice,
//     };
//   });

//   return result;
// };

//v2
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

/*
 */
/*
    ## Example 3 - Метод filter
    Нехай функція `filterByPrice` повертає масив автомобілів ціна 
    яких менша ніж значення параметра `threshold`.
    const filterByPrice = (cars, threshold) => {};
    console.table(filterByPrice(cars, 30000));
    console.table(filterByPrice(cars, 25000));
*/
//v1
// const filterByPrice = (cars, threshold) => {
//   const result = cars.filter((car) => {
//     return car.price < threshold;
//   });

//   return result;
// };

// v2
// const filterByPrice = (cars, threshold) =>
//   cars.filter(({price}) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
 */
/*
    ## Example 4 - Метод filter
    Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
    onSale яких true.
    const getCarsWithDiscount = cars => {};
    console.table(getCarsWithDiscount(cars));
*/

//v1
// const getCarsWithDiscount = (cars) => {
//   const result = cars.filter((car) => {
//     // return car.onSale;
//   });

//   return result;
// };

//v2
// const getCarsWithDiscount = (cars) => cars.filter(({onSale}) => onSale);

// console.table(getCarsWithDiscount(cars));

/*
 */
/*
    ## Example 5 - Метод filter
    Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
    збігається зі значенням параметра `type`.
    const getCarsWithType = (cars, type) => {};
    console.table(getCarsWithType(cars, 'suv'));
    console.table(getCarsWithType(cars, 'sedan'));
*/

/*
 */
/*
    ## Example 6 - Метод find
    const getCarByModel = (cars, model) => {};
    console.log(getCarByModel(cars, 'F-150'));
    console.log(getCarByModel(cars, 'CX-9'));
*/
//v1
// const getCarByModel = (cars, model) => {
//   const result = cars.find((car) => {
//     return car.model === model;
//   });

//   return result;
// };

//v2
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

/*
 */
/*
    ## Example 7 - Метод sort
    Нехай функція `sortByAscendingAmount` повертає новий масив 
    автомобілів відсортований за зростанням значення ключу `amount`.
    const sortByAscendingAmount = cars => {};
    console.table(sortByAscendingAmount(cars));
*/

// const sortByAscendingAmount = cars => {
//   const result = cars.sort((a, b) => {
//     return a.amount - b.amount;
//   });

//   console.table(result);
// };

// console.table(sortByAscendingAmount(cars));

/*
 */
/* вирішила
    ## Example 8 - Метод sort
    Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
    відсортований за зменшенням значення властивості `price`.
    const sortByDescendingPrice = cars => {};
    console.table(sortByDescendingPrice(cars));
*/
// const sortByDescendingPrice = cars =>
//   [...cars].sort((a, b) => b.price - a.price);
// console.table(sortByDescendingPrice(cars));
/*
 */
/*вирішила !!!!
    ## Example 9 - Метод sort
    Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
    за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
    значення параметра `order`.
    const sortByModel = (cars, order) => {};
    console.table(sortByModel(cars, 'asc'));
    console.table(sortByModel(cars, 'desc'));
*/
// const sortByModel = (cars, order) => {
//   const carModel = cars.map(cars => cars.model.toLowerCase());

//   carModel.sort((a, b) => a.localeCompare(b));
// };
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

/*
 */
/*
    ## Example 10 - Метод reduce
    Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
    властивостей `amount`).
    const getTotalAmount = cars => {};
    console.log(getTotalAmount(cars));
*/

//v1
// const getTotalAmount = (cars) => {
//   const result = cars.reduce((acc, car) => {
//     acc += car.amount;
//     return acc;
//   }, 0);

//   return result;
// };

//v2 // все те що повертається з коллбеку - записується в acc
// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//calсulateAverage
// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((candiBober) => {
//     total += candiBober;
//   });

//   return total / args.length;
// };

//v1
// const calсulateAverage = (...args) => {
//   // let total = 0;

//   // args.forEach((candiBober) => {
//   //   total += candiBober;
//   // });

//   const total = args.reduce((acc, number) => {
//     acc += number;
//     return acc;
//   }, 0);

//   return total / args.length;
// };

//v2
// const calсulateAverage = (...args) =>
//   args.reduce((acc, number) => acc + number, 0) / args.length;

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5

/* reduce який повертає об'єкт */

// const result = cars.reduce(
//   (acc, car) => {
//     acc.totalAmount += car.amount;
//     acc.totalPrice += car.price;
//     return acc;
//   },
//   {totalAmount: 0, totalPrice: 0},
// ); //{totalAmount, totalPrice}

// console.log(result);

/* reduce який повертає строку */
// const result = cars.reduce((acc, car) => {
//   acc += `_${car.model}`;

//   return acc;
// }, '');

// console.log(result);
/*
 */
/* виконала
    ## Example 11 - Ланцюжки методів
    Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
    тільки тих, які зараз на розпродажі.
    const getModelsOnSale = cars => {};
    console.table(getModelsOnSale(cars));
*/
// const getModelsOnSale = cars =>
//   cars.filter(({ onSale }) => onSale).map(cars => cars.model);
// console.table(getModelsOnSale(cars));

/*
 */
/*виконала
    ## Example 12 - Ланцюжки методів
    Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
    (Властивість onSale), відсортованих за зростанням ціни.
    const getSortedCarsOnSale = cars => {};
    console.table(getSortedCarsOnSale(cars));
*/
// const getSortedCarsOnSale = cars =>
//   cars
//     .filter(({ onSale }) => onSale)
//     .sort((a, b) => a.price - b.price)
//     .map(cars => cars.make);
// console.table(getSortedCarsOnSale(cars));




// lesson з ментором

//#1
// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// #2
// // Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// // Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
// //     яка пам"ятає ім"я шефа під час свого виклику
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`)
// }

// makeDish('Mango', 'apple pie')
// makeDish('Poly', 'muffins')

// #3
// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price)
//   },
// }

// product.showPrice()

// #4
// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price)
//   },
// }

// function callAction(action) {
//   action()
// }
// callAction(product.showPrice.bind(product))

// #5
// Напишіть функцію each(array, callback), яка першим параметром приймає масив,
//     а другим - функцію, яка буде застосована до кожного елемента масиву.
//     Функція each повинна повернути новий масив, елементами якого будуть результати виклику callback
// callback повинна помножувати елементи на 2
// const arrayNumber = [3, 5, 6, 34, 8, 83, 12, 34]

// function each(array, callback) {
//   const newArray =[];
//   for(const element of array) {
//     newArray.push(callback(element))
//   }
//   return newArray
// }

// const mult = (element) => element*2;

// console.log(each(arrayNumber, mult));

// варіант б
// function each(array, callback) {
 
  
//   return callback(array)
// }

// const mult = (newArray) => newArray.map( element =>   element*2);

// console.log(each(arrayNumber, mult));


// const makeChangeColor = function () {
  //   const changeColor = function (color) {
  //     // this.color = color
  //     console.log('changecolor -> this', this)
  //   }
  
  //   //   changeColor()
  //   const sweat = {
  //     color: 'teal',
  //   }
  
  //   sweat.uptadeColor = changeColor
  //   sweat.uptadeColor('red')
  
  //   return sweat.uptadeColor
  // }
  // makeChangeColor()
  
  // 1. git clone - копіює репозиторій(папку з файлами) на компютер
  //  2. git branch "branchName" - створює гілку з назвою "branchName"
  //  3. git checkout "branchName" - переходить на гілку з назвою "branchName"
  //  4. git checkout -b "branchName" - створюємо гілку з назвою "branchName" і переходимо на неї
  //  5. git add . - зберігаємо зміни в файлах
  //  6. git commit -m "commit message" - підписуємо збереженні зміни в файлах
  //  7. git push - відправляємо зміни на сайт github
  //  8. git pull - отримуємо останні зміни з сайту github
  //  9. git status - показуємо статус проекту
  //  10. git branch - показуємо список гілок в проекті
  //  11. git branch -r - показуємо список гілок на сайті github
  //  12. git branch -a - показуємо список гілок на компютері та на сайті github
  //  13. git fetch - отримуємо зміни з сайту github
  //  14. git stash - зберігаємо не збережені зміни в файлах і кладемо їх в буфер обміну
  //  15. git stash apply - вставляємо збережені зміни з буфера обміну
  // 16. git merge "banchName" - зливаємо гілку з назвою "branchName" в поточну гілку
  //  17. git merge --abort - відміняємо зливання гілок
  //  18. git branch -d branchName - видаляє гілку локально з проекту
  //  19. git push origin --delete name - видаляє гілку з сайту github
  //  20. git diff - показує відрізки рядків між двома версіями файлу (між двома комітами)
  //  21. git log - показує історію комітів
  //  22. cd gitTutorial - переходимо в папку gitTutorial
  // Для того щоб вийти з режиму перегляду комітів використовуйте клавішу q (стосується команди №20 і №21)
  
  // https://www.youtube.com/watch?v=wFY5HVuQBgw