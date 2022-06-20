function sumFunc(a, b) {
    console.log(a + b);
}

sumFunc(11, 22);
sumFunc(12, 14);
sumFunc(1223, 1214);
sumFunc(1223, 1214125);

const calc = {
    sum: function(a, b) {
        console.log(a + b);
    },
    subt: function(a, b) {
        console.log(a - b)
    },
    mult: function(a, b) {
        console.log(a * b)
    },
    div: function(a, b){
        console.log(a / b)
    },
    pow: function(a, b){
        console.log(a**b)
    },
};

calc.sum(10, 132);
calc.subt(30, 21);
calc.mult(3, 5);
calc.div(10, 34);
calc.pow(2, 2);