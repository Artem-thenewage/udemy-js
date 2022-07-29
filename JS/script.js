function fib(x) {

    if (x <= 0 || typeof(x)!='number') {
        return "";
    }
    let res = '0';
    let prev1 = 0, prev2 = 1, sum = 0;
    for (let i = 2; i <= x; i++) {
        if (i == 2) {
            sum = 1;
            res += ' ' + sum;
        }
        else {
            sum = prev1 + prev2;
            res += ' ' + sum;
            prev1 = prev2;
            prev2 = sum;
        }
    }
    return res;
}

console.log(fib(7));