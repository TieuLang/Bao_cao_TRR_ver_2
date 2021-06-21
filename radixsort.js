function Radixsort() {
    $("#bbl").hide();
    $("#insert").hide();
    $("#select").hide();
    $("#tree").hide();
    $("#radix").show();
    $("#stt").show();
    $("#shell").hide();
    $("#CombSort").hide();
    $("#ct_right").show();
    c_delay = 0;
    var m = div_sizes[0];
    var stack_vt = new Array(10);
    var stack = new Array(10);
    var chieu_cao = new Array(10);
    exp = 1;
    var divs_top = [];
    var divs_left = [];
    var divs_new=[];
    for (var i = 0; i < array_size; i++) {
        if (m < div_sizes[i]) m = div_sizes[i];
        divs_left[i] = parseInt(divs[i].style.left);
        divs_top[i] = parseInt(divs[i].style.top);
    }
    var ktt1 = false;
    for (var exp = 1; Math.floor(m / exp) > 0; exp = exp * 10) {
        kt_dau=true;
        doimau(35);
        doimau(35);
        for (var i = 0; i < 10; i++) {
            stack_vt[i] = new Array();
            stack[i] = new Array();
            chieu_cao[i] = 0;
        };
        doimau(36);
        doimau(36);
        var stack = new Array(10);
        for (var i = 0; i < 10; i++) stack[i] = new Array();
        for (var i = 0; i < array_size; i++) {
            doimau(37);
            doimau(37);
            doimau(38);
            var vt = Math.floor(div_sizes[i] / exp) % 10;
            doimau(38);
            stack[Math.floor(div_sizes[i] / exp) % 10].push(div_sizes[i]);
            stack_vt[Math.floor(div_sizes[i] / exp) % 10].push(i);
            var sll = 0;
            divs_top[i]=665-chieu_cao[vt];
            divs_left[i]=447+91*vt;
            doimau(39);
            div_update1(divs[i], 100, i, divs_left[i], divs_top[i]);
            sl_dung=sl_dung+delay_time*100;
            kt_dau=false;
            doimau(39);
            sl_dung=0;
            chieu_cao[vt] += 30;
            
            
        };
        doimau(40);
        var tmp = 0;
        doimau(40);
        var vt_left = 0;
        for (var i = 0; i < 10; i++)
        {
            doimau(41);
            doimau(41);
            for (var j = 0; j < stack[i].length; j++) {
                doimau(42);
                doimau(42);
                div_sizes[tmp] = stack[i][j];
                
                var vt = stack_vt[i][j];
                divs_new[tmp]=divs[vt];
                var poe1 = 0;
                var poe2 = 0;
                divs_left[vt]=420+vt_left;
                divs_top[vt]=170;
                doimau(43);
                div_update1(divs[vt], 100, i, divs_left[vt], divs_top[vt]);
                sl_dung=sl_dung+delay_time*100;
                doimau(43);
                sl_dung=0;
                chieu_cao[vt] -= 30;
                vt_left += 40;
                doimau(44);
                tmp = tmp + 1;
                doimau(44);
            };
        };
        for (var i=0;i<array_size;i++) divs[i]=divs_new[i];
   };
   enable_buttons();
}