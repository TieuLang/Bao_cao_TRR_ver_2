//We only have to change background-color and height of the sorting element.

var speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

var sl_dung = 0;
var kt_dau = true;

function vis_speed() {
    var array_speed = inp_aspeed.value;
    switch (parseInt(array_speed)) {
        case 1: speed = 8;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }

    delay_time = 10000 / (Math.floor(array_size / 10) * speed);        //Decrease numerator to increase speed.
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);        //Decrease numerator to increase speed.
var c_delay = 0;//This is updated ov every div change so that visualization is visible.

function div_update(cont, height, color, index) {
    window.setTimeout(function () {
        $("#line" + index).toggleClass("addcolor");
        cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time);
}

function div_update1(cont, sl, i, dleft, dtop) {
    if (kt_dau == false) c_delay = c_delay;
    window.setTimeout(function () {

        var xxx = document.getElementById("test");

        var kc_top1 = parseInt(cont.style.top);
        var kc_left1 = parseInt(cont.style.left);
        var kc_top = (dtop - kc_top1) / 100;
        var kc_left = (dleft - kc_left1) / 100;
        var poe_top = parseInt(cont.style.top);
        var poe_left = parseInt(cont.style.left);

        console.log(cont);
        console.log(xxx);
        window.setInterval(function () {
            if (sl <= 0) {
                window.clearInterval();
            } else {
                poe_top = poe_top + kc_top;
                poe_left = poe_left + kc_left;
                cont.style.top = (poe_top) + "px";
                cont.style.left = (poe_left) + "px";
                sl = sl - 1;
            };

        }, delay_time);
        //console.log(cont);


    }, c_delay);

}

function doimau(index) {
    if (sl_dung != 0) c_delay += sl_dung; else c_delay += delay_time;
    window.setTimeout(function () {
        $("#line" + index).toggleClass("addcolor");
    }, c_delay);
}

function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, c_delay += delay_time);
}
