// Место для первой задачи
//console.log(12%1 !=0);Math.ceil()
//console.log(Math.ceil(12.0));

function calculateVolumeAndArea(a) {

    if (typeof(a)!='number' || a< 0 || a%1 != 0) {
        return "При вычислении произошла ошибка";
    }
    const volume = a * a * a;
    const area = 6 * (a * a)
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
//console.log(calculateVolumeAndArea(-1));

// Место для второй задачи
function getCoupeNumber(a) {
    if (typeof(a)!='number' || a< 0 || a%1 != 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    else if (a === 0 || a > 36) {
        return "Таких мест в вагоне не существует";
    }
    return Math.ceil(a / 4);
}
//console.log(getCoupeNumber(35));