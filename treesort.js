
function treesort() {
    $("#bbl").hide();
    $("#insert").hide();
    $("#select").hide();
    $("#tree").show();
    $("#radix").hide();
    $("#stt").hide();
    $("#ct_right").hide();
    $("#shell").hide();
    $("#CombSort").hide();
    c_delay = 0;
    var tree=new Array(500);
    var tree_divs=new Array(500);
    for (var i=0;i<500;i++) tree[i]=-1;
    
    
    for (var i=0;i<array_size;i++)
    {
        doimau(27);
        doimau(27);
        function insert(a,x,sl_trai)
        {
            var test=document.getElementById("test");
            doimau(17);
            
            if (tree[x]==-1) 
            {
                tree[x]=div_sizes[a];
                tree_divs[x]=divs[a];
                var sl=1;
                var do_sau=1;
                var so_mu=1;
                while (sl<=x)
                {
                    so_mu=so_mu*2;
                    sl=sl+so_mu;
                    do_sau=do_sau+1;
                };
                
                div_update1(divs[a],100,a,400+(1380-400)/so_mu*(sl_trai+0.5),200+do_sau*50);
                sl_dung=sl_dung+delay_time*100;
                doimau(17);
                sl_dung=0;
                return 0;
            };
            doimau(17);
            doimau(18);
            doimau(18);
            if (div_sizes[a]<tree[x])
            {
                doimau(19);
                doimau(19);
                insert(a,x*2+1,sl_trai*2);
            }
            else 
            {
                doimau(21);
                doimau(21);
                insert(a,x*2+2,sl_trai*2+1);
            };
            doimau(22);
            doimau(22);
            return 0;
        };
        doimau(28);
        doimau(28);
        insert(i,0,0);
    };
    var kc1_left=420;
    doimau(29);
    doimau(29);
    function lnr(x)
    {
        doimau(23);
        doimau(23);
        if (tree[x]==-1) return;
        doimau(24);
        doimau(24);
        lnr(x*2+1);
        doimau(25);
        div_update1(tree_divs[x],100,x,kc1_left,170);
        sl_dung=sl_dung+delay_time*100;
        doimau(25);
        sl_dung=0;
        kc1_left+=40;
        doimau(26);
        doimau(26);
        lnr(x*2+2);
    };
    doimau(30);
    doimau(30);
    lnr(0);
}