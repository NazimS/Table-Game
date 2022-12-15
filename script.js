
const cedvel = document.getElementById("cedvel");
const counter = document.getElementById("counter");
const result = document.getElementById("result");
let count = 10;
let kod = '';
let arr = [];
let n = 1;

for (let i = 1; i <= 16; i++) {
    arr.push(i);
}
counter.innerHTML = count;

setInterval(() => {
    if (count > 0) {
        count-- ;
    counter.innerHTML = count;
    } else {result.innerHTML = "vaxt bitdi"}
}, 1000);
   

for (let i = 1; i <= 4; i++) {
    kod += "<tr>"
        for (let k = 1; k <= 4; k++) {
            let x = rand(0, arr.length - 1);
            kod += `<td onclick = "vur(this)">${arr[x]}</td>`;
            arr.splice(x, 1);
        }
    kod += "</tr>"
}
    cedvel.innerHTML = kod;

function vur(elm) {
    // alert("salam");
    // console.log(elm);
    if (elm.innerHTML == n) {
        elm.style.background = "skyblue" 
        n++
    }
}    

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
