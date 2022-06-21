const myCalculator = {
    sum: function (a, b) {
        return (a + b);
    },
    sub: function (a, b) {
        return (a - b);
    },
    mul: function (a, b) {
        return (a * b);
    },
    div: function (a, b) {
        return (a / b);
    },
    pow: function (a, b) {
        return (a**b);
    }
};

const divResult = myCalculator.div(10,2);
console.log(divResult);

const subResult = myCalculator.sub(20, divResult);
const mulResult = myCalculator.mul(subResult, 2);

console.log(mulResult);