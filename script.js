    
    const cedvel = document.getElementById("cedvel");
    const counter = document.getElementById("counter");
    const result = document.getElementById("result");
    let count = 20;
    let kod = '';
    let arr = [];
    let n = 1;

    for (let i = 1; i <= 16; i++) {
        arr.push(i);
    }
    counter.innerHTML = count;

    let timer = setInterval(saat, 1000) ;

   // design table with random units
    for (let i = 1; i <= 4; i++) {
        kod += "<tr>"
            for (let k = 1; k <= 4; k++) {
                let x = rand(0, arr.length - 1);
                kod += `<td onclick = "press(this)">${arr[x]}</td>`;
                arr.splice(x, 1);
            }
        kod += "</tr>"
    }
    cedvel.innerHTML = kod;

    // timer activities
    function saat() {
        if (count > 0) {
            count-- ;
            counter.innerHTML = count;
        } else stop("Game Over !! Your time is up !!");
    }
    
    // stop timer and show relevant message
    function stop(msg) {
        clearInterval(timer);
        result.innerHTML = msg;
        n = 18; // stop clicking function after last number
    }

    // press table cells, change bg color and increase array numbers
    function press(elm) {

        if (elm.innerHTML == n) {
            elm.style.background = "#83D475" ;
            n++ ;
        }

        // finish pressing all table cells
        if (n == 17) stop("Congratulations !! You've succesfully finished");
    }    

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
