/*
 * - Переменные и типы примитивов
 * - const и let
 * - Логирование с методом console.log()
 * - Уникальность идентификатора
 */

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать!';
// const isOpen = true;
// const shouldConfirm = false;

/*
 * * - Оператор typeof
 */

// const type = typeof isOpen;

// console.log(type);

/*
 * - Как window.alert() блокирует интерпретацию
 */

// console.log('До');
// alert('qweqweqwe');
// console.log('После');

// function filterArray(numbers, value) {
//   console.log(numbers);
//   // console.log(value);
//   const largerNumbers = [];

//   for (const number of numbers) {
//     console.log(number);
//     if (number <= value) {
//       console.log(number);
//       continue;
//     }
//     largerNumbers.push(number);
//   }
//   return largerNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(numbers[i]); // 18, 29, 34
// }
// const largerNumbers = [];
// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }
//   largerNumbers.push(number);
//   console.log(largerNumbers); // 18, 29, 34
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());}

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon },
//   tomorrow: {
//     low: lowTomorrow,
//     tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     high: highTomorrow,
//   },
// } = forecast;

// console.log(forecast);
// console.log(lowToday);
// console.log(highToday);
// console.log(todayIcon);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);
// console.log(highTomorrow);

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     console.table(this.potions);
//     for (const potion of this.potions) {
//       console.table(potion);
//       console.log(potion.name);
//       console.log(newPotion.name);
//       if (newPotion.name === potion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (i = 0; i < potions.length; i += 1) {
//       if (potionName === potions[i].name) {
//         potions.splice(i, 1);
//       }
//     }
//     return potions;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (oldName === potion.name) {
//         const potion = { name: newName };
//         console.log(potion);
//       }
//     }
//     console.log(potions);
//     return potions;
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
//     return onError(error);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//     м.5 № 9

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//     return Storage;
//   }

//   removeItem(itemToRemove) {
//     const itemIndex = this.items.findIndex(item => item === itemToRemove);
//     this.items.splice(itemIndex, 1);
//     return Storage;
//   }
// }
// console.dir(Storage);

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// задача м.5 № 11

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//     return this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//     return this.value;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//    м.5 № 17

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     return price < Car.#MAX_PRICE
//       ? 'Success! Price is within acceptable limits'
//       : 'Error! Price exceeds the maximum';
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
