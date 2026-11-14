// // Ці задачі надсилайте на перевірку (давайте їх підряд у одному файлі, як на уроці)
// // При розв’язанні задач намагайтесь використовувати відповідні методи (map, filter, reduce,…) всюди, де це можливо
// // Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const pricesOfYear = Array.from({ length: 12 }, () => getRndInteger(1, 10000));

// // 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

// const pricesGreaterThan1000 = pricesOfYear.filter((price) => price > 1000);

// // 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

// const numbersGreaterThan1000 = [];
// pricesOfYear.forEach((price, index) => {
//   if (price > 1000) numbersGreaterThan1000.push(index);
// });

// // 3)Сформувати список з тих цін, які більші за попереднє значення

// const pricesGreaterThanPrevious = pricesOfYear.filter((price, index, array) => price > array[index - 1]);

// // 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

// const maxPrices = pricesOfYear.reduce((prevMax, element) => (element > prevMax ? element : prevMax));

// const percentagesOfMaximumPrice = pricesOfYear.map((price) => parseFloat(((price / maxPrices) * 100).toFixed(2)));

// // 5)Підрахувати кількість змін цін

// const numberPriceChanges = pricesOfYear.reduce((count, element, index, arrRef) => (index > 0 && element !== arrRef[index - 1] ? count + 1 : count), 0);

// // 6)Визначити, чи є ціна, що менше 1000

// const isPriceLessThan1000 = pricesOfYear.some((element) => element < 1000);

// // 7)Визначати, чи усі ціни більше за 1000

// const isPricesMoreThan1000 = pricesOfYear.every((element) => element > 1000);

// // 8)Підрахувати кількість цін, що більше за 1000

// const numMoreThan1000 = pricesOfYear.reduce((prevNumMoreThan1000, element) => (element > 1000 ? prevNumMoreThan1000 + 1 : prevNumMoreThan1000), 0);

// // 9)Підрахувати суму цін, що більше за 1000

// const sumPricesMoreThan1000 = pricesOfYear.reduce((prevSumPricesMoreThan1000, element) => (element > 1000 ? prevSumPricesMoreThan1000 + element : prevSumPricesMoreThan1000), 0);

// // 10)Знайти першу ціну, що більше за 1000

// const firstPricesMoreThan1000 = pricesOfYear.find((element) => element > 1000);

// // 11)Знайти індекс першої ціни, що більше за 1000

// const firstIndexOfMoreThan1000 = pricesOfYear.findIndex((element) => element > 1000);

// // 12)Знайти останню ціну, що більше за 1000

// const lastPricesMoreThan1000 = pricesOfYear.findLast((element) => element > 1000);

// // 13)Знайти індекс останньої ціни, що більше за 1000

// const lastIndexOfMoreThan1000 = pricesOfYear.findLastIndex((element) => element > 1000);
