// 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
// const numElement = parseInt(prompt(`Введіть кількість елементів`, "10"));
// const array = new Array(numElement).fill(0);
// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
// const numElement = parseInt(prompt(`Введіть кількість елементів`, "10"));
// const array = new Array(numElement).fill(1);
// array.fill(7, numElement / 2);
// 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
// const numElement = parseInt(prompt(`Введіть кількість елементів`, "10"));
// const array = new Array(numElement).fill(7);
// array.fill(1, 0, 5);
// ///// ----------   Тут використати цикл for..of  -----------
// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100
// const array = [231, 2, 345, -12, 34, -67, 786, 0, 99];
// for (const element of array) {
//   if (element > 100) document.write(`${element}, `);
// }
// 5.Дано масив елементів. Знайти добуток додатних елементів
// const array = [231, 2, 345, -12, 34, -67, 786, 0, 99];
// let positiveProduct = 1;
// for (const element of array) {
//   if (element > 0) positiveProduct *= element;
// }
// //======= Тут використовуйте, що хочете для розв’язання (але бажано використовувати спеціальні методи масивів)==================
// 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
// const array = [231, 2, 345, -12, 34, -67, 786, 0, 99];
// array.forEach((element, index, baseArrRef) => {
//   if (element > baseArrRef[0]) baseArrRef[index] = element * 2;
// });
// 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
// const array = [500, 2600, 1299, 900];
// array.forEach((element, index, baseArrRef) => {
//   if (element > 1000) baseArrRef[index] = parseFloat((element * 0.7).toFixed(2));
// });
// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
// const arrayNumbers = ["BA4301BB", "AA3001BB", "TA1041BB", "AC1032BB", "AM1001BB"];
// const newArrayWithA = arrayNumbers.filter((element) => element[0] === "A");
// 9. Дано масив імен. Сформувати масив з перших літер цих імен.
// const arrayNames = ["Pavlo", "Ivan", "Vasia", "Olha"];
// const arrayLetters = arrayNames.map((element) => element[0]);
// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
// const arrayPrices = [100, 250.43, 330, 500];
// const tax = 0.2;
// const arrayTax = arrayPrices.map((element) => parseFloat((element * tax).toFixed(2)));
