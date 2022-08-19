/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан3",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector(".promo__adv").remove();
document.querySelector(".promo__genre").innerHTML = "ДРАМА";
document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')";

const listItem = document.querySelectorAll(".promo__interactive-item");

movieDB.movies.sort().forEach( (item, i) => {
    listItem[i].textContent = (i+1) + " " +item;
});