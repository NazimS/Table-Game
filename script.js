
const cedvel = document.getElementById("cedvel");
let kod = '';
let arr = [];

for (let i = 1; i <= 16; i++) {
    arr.push(i);
}

for (let i = 1; i <= 4; i++) {
    kod += "<tr>"
        for (let k = 1; k <= 4; k++) {
            let x = rand(0, arr.length - 1);
            kod += `<td onclick = "vur()">${arr[x]}</td>`;
            arr.splice(x, 1);
        }
    kod += "</tr>"
}
    cedvel.innerHTML = kod;

function vur(elm) {
    alert("salam");
}    

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
