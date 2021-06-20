function combsort()
{
    $("#bbl").hide();
    $("#CombSort").show();
    $("#select").hide();
    $("#tree").hide();
    $("#radix").hide();
    $("#stt").show();
    $("#shell").hide();
    $("#ct_right").show();
    c_delay=0;
    div_update(divs[array_size],div_sizes[array_size],"green",8);    
    var gap=array_size;
    div_update(divs[array_size],div_sizes[array_size],"green",8);
    div_update(divs[array_size],div_sizes[array_size],"green",9);
    var swapped=true;
    div_update(divs[array_size],div_sizes[array_size],"green",9);
    function getnextgap(gap)
    {
        div_update(divs[array_size],div_sizes[array_size],"green",5);
        gap=Math.trunc((gap*10)/13);
        div_update(divs[array_size],div_sizes[array_size],"green",5);
        div_update(divs[array_size],div_sizes[array_size],"green",6);
        div_update(divs[array_size],div_sizes[array_size],"green",6);
        if (gap<1) return 1;
        div_update(divs[array_size],div_sizes[array_size],"green",7);
        div_update(divs[array_size],div_sizes[array_size],"green",7);
        return gap;
    }
    
    while (gap!=1 || swapped==true)
    {
        div_update(divs[array_size],div_sizes[array_size],"green",10);
        div_update(divs[array_size],div_sizes[array_size],"green",10);
        div_update(divs[array_size],div_sizes[array_size],"green",11);
        div_update(divs[array_size],div_sizes[array_size],"green",11);
        gap=getnextgap(gap);
        div_update(divs[array_size],div_sizes[array_size],"green",12);
        div_update(divs[array_size],div_sizes[array_size],"green",12);
        swapped=false;
        for (var i=0;i<array_size-gap;i++)
        {
            var test=document.getElementById("test");
            test.innerHTML=array_size;
            div_update(divs[array_size],div_sizes[array_size],"green",13);
            div_update(divs[array_size],div_sizes[array_size],"green",13);
            div_update(divs[array_size],div_sizes[array_size],"green",14);
            div_update(divs[i],div_sizes[i],"yellow");
            div_update(divs[i+gap],div_sizes[i+gap],"yellow");
            if (div_sizes[i]>div_sizes[i+gap])
            {
                div_update(divs[array_size],div_sizes[array_size],"green",14);
                div_update(divs[array_size],div_sizes[array_size],"green",15);
                div_update(divs[i],div_sizes[i],"#400082");
                div_update(divs[i+gap],div_sizes[i+gap],"#400082");
                
                var tg=div_sizes[i];
                div_sizes[i]=div_sizes[i+gap];    
                div_sizes[i+gap]=tg;
                div_update(divs[i],div_sizes[i],"#400082");
                div_update(divs[i+gap],div_sizes[i+gap],"#400082");
                div_update(divs[array_size],div_sizes[array_size],"green",15);
                div_update(divs[array_size],div_sizes[array_size],"green",16);
                swapped=true;
                div_update(divs[array_size],div_sizes[array_size],"green",16);
            } else div_update(divs[array_size],div_sizes[array_size],"green",14);
            div_update(divs[i],div_sizes[i],"#d7385e");
            div_update(divs[i+gap],div_sizes[i+gap],"#d7385e");
        }
    }
    for (var i=0;i<array_size;i++) div_update(divs[i],div_sizes[i],"green");
}