// Задачи:
// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, 
// а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...
// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
// Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет 
// новое поле id. Значение этого поля установите по нумерации фильма.
// Пример:
// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   
// { name: 'Some bad film', rating: 4, id: 3 } ]
// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из 
// фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)
// P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и
//  что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.
'use strict';
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter( (obj) => obj.rating >= 8 );
}
//console.log(showGoodFilms(films));


function showListOfFilms(arr) {
    let sum = arr[0].name;
    const newarr = arr.reduce( (sum, curr) => `${typeof(sum) == 'object' ? sum.name : sum}, ${curr.name}`);
    return newarr;
}
//console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map( (obj, index) => {
        obj.id = index;
        return obj;}
    );
}
//console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    // const newArr = Object.entries(arr);
    // console.log(newArr);
    return arr.every(item => typeof(item.id) != 'undefined');
}

//console.log(checkFilms(tranformedArray));




