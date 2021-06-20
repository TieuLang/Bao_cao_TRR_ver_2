function ShellSort() {
    $("#bbl").hide();
    $("#insert").hide();
    $("#select").hide();
    $("#tree").hide();
    $("#radix").hide();
    $("#shell").show();
    $("#CombSort").hide();
    $("#ct_right").show();
    $("#stt").show();
    c_delay = 0;
  
    var initial = "#d7385e"
    var checking = "yellow"
    var swapping = "#400082"
    var swapped = "green"
  
    for (var gap = Math.floor(array_size / 2); gap > 0; gap = Math.floor(gap / 2)) {
      div_update(divs[array_size], div_sizes[array_size], initial, 45);
      div_update(divs[array_size], div_sizes[array_size], initial, 45);
  
      for (var i = gap; i < array_size; i++) {
        div_update(divs[array_size], div_sizes[array_size], initial, 46);
        div_update(divs[array_size], div_sizes[array_size], initial, 46);
  
        for (var j = i; j >= gap; j = j - gap) {
          div_update(divs[array_size], div_sizes[array_size], initial, 47);
          div_update(divs[array_size], div_sizes[array_size], initial, 47);
  
          div_update(divs[array_size], div_sizes[array_size], initial, 48);
          div_update(divs[array_size], div_sizes[array_size], initial, 48);
  
          div_update(divs[j - gap], div_sizes[j - gap], checking);
          div_update(divs[j], div_sizes[j], checking);
          if (div_sizes[j - gap] > div_sizes[j]) {
            div_update(divs[j], div_sizes[j], swapping); //Color update
            div_update(divs[j - gap], div_sizes[j - gap], swapping); //Color update
  
            var temp = div_sizes[j];
            div_sizes[j] = div_sizes[j - gap];
            div_sizes[j - gap] = temp;
  
            div_update(divs[j], div_sizes[j], swapped); //Height update
            div_update(divs[j - gap], div_sizes[j - gap], swapped); //Height update
  
  
            div_update(divs[j], div_sizes[j], initial); //Height update
            div_update(divs[j - gap], div_sizes[j - gap], initial); //Height update
          } else {
            div_update(divs[j], div_sizes[j], initial); //Height update
            div_update(divs[j - gap], div_sizes[j - gap], initial); //Height update
  
            div_update(divs[array_size], div_sizes[array_size], initial, 50);
            div_update(divs[array_size], div_sizes[array_size], initial, 50);
            break;
          }
        }
      }
    }
  
    enable_buttons();
  }