// interval : every n time
//setInterval(name of function, millisecond); 
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    
}
getClock();
setInterval(getClock, 1000);