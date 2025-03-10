// function calc(operation, a, b) {
//     switch (operation) {
//         case 'add':
//             return a + b;
//         case 'multi':
//             return a * b;
//         case 'subtract':
//             return a - b;
//         default:
//             return 'Unknown operation';
//     }
// }
// console.log(calc('add', 1, 2));
// console.log(calc('multi', 1, 2));
// console.log(calc('subtract', 3, 2));

// const b = -30;
// let temp = b;
// let celsi = temp;
// if(celsi<0) {
//     console.log("Опасно холодно");
// } else if (celsi<=5) {
//     console.log('Очень холодно');
// } else if (celsi<=20) {
//     console.log('Прохладно');
// } else if (celsi<30) {
//     console.log('тепло');
// } else {
//     console.log('пекло');
// }

// const c = -20;
// if (c>=1000 && c<5000) {
//     console.log(c*0.95 + ' Итоговая цена со скидкой');
// } else if (c>= 5000) {
//     console.log(c*0.9 + ' Итоговая цена со скидкой');
// } else if (c<1) {
//     console.log('Неверно введённая сумма покупки');
// } else {
//     console.log(c + ' Итоговая цена без скидок');
// }

// function calc(operation, a, b) {
//     if (operation=='add') {
//         return a+b;
//     } else if (operation=='multi') {
//         return a*b;
//     } else if (operation=='subtract') {
//         return a - b;
//     } else {
//         return 'Неизвестный оператор'
//     }
// }
// console.log(calc('add', 1, 2));
// console.log(calc('multi', 1, 2));
// console.log(calc('subtract', 1, 2));

// const people = {
//     list: {
//         "Igor": 8999,
//         "Sveta": 8998,
//         "Nastya ya": 8997
//     },
//     raitingPeople: {
//         "Igor": 1,
//         "Sveta": 2,
//         "Nastya ya": 3
//     }
// }
// // function addContacts (name, number) {
// //     people.list[name] = number;
// // }
// const addContacts = (name, number) => {
//     if (!name || !number) {
//         console.log("Ошибка: имя и номер должны быть указаны!");
//         return;
//     }
//     if (Object.hasOwn(people.list, name)) {
//         console.log(`Контакт "${name}" уже существует с номером ${people.list[name]}.`);
//         return;
//     }
//     people.list[name] = number;
//     console.log(`Добавлен контакт: ${name} - ${number}`);
// };
// addContacts( 223);
// console.log(people.list);
// for (const[name, number] of Object.entries(people.list)) {
//     console.log(name + '-' + number);
//}

// const toDoList = ['встать', 'сесть', 'лечь'];
// const firstElement = toDoList[0]; // 'почитать'
// const lastElement = toDoList[toDoList.length - 1]; // 'помыть машину'
// console.log(toDoList.length);
// const brawlers = ['Gale', 'Nita', 'Gene'];
// brawlers.forEach(brawler => {
//     console.log(`brawler: ${brawler}`);
// });
// const lowerCaseBrawlers = brawlers.map(word => word.toLowerCase());
// console.log(lowerCaseBrawlers);
// const numbers = [1, 11, -2, 3, -10, 4];
// const absoluteNumbers = numbers.map(Math.abs);
// console.log(absoluteNumbers);
// const animals = ['cat', 'dog', 'tiger', 'elephant', 'lion', 'abracadabra'];
// const findMore5 = animals.find(animal => animal.length > 5);
// const findEleph = animals.findIndex(animal => animal === 'elephant');
// console.log(findMore5);
// console.log(findEleph);

const numbers = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);




