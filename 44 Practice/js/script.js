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


function submitMovie(event){
    event.preventDefault();
    if (inp.value.trim().length > 21) {
        movieDB.movies.push(inp.value.substring(0, 21) + '...');
    }
    else if(inp.value.trim().length > 0) {
        movieDB.movies.push(inp.value);
    }
    else {
        return '';
    }
    inp.value = '';
    showMovieList();
    //console.log(movieDB.movies);
}

function showMovieList() {
    const movieList = document.querySelector('.promo__interactive-list');

    movieList.innerHTML = "";
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    document.querySelectorAll('.delete').forEach( (btnDel, i) => {
        btnDel.addEventListener('click', () => {
            btnDel.parentElement.remove();
            movieDB.movies.splice(i,1);
            showMovieList();
            console.log(movieDB.movies);
        }
        );
    }
    );
}
function deleteMovie(e){
    alert(e);
}
const inp = document.querySelector('.adding__input');
const btn = document.querySelector('.add>button');
let deleteButtons = document.querySelectorAll('.delete');
//console.log('');




btn.addEventListener('click', submitMovie );
showMovieList();