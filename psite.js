$("#toggle1").hide();
$("#toggle2").hide();

$('div').resizable({
    direction: ['vartical']
});
$('div').draggable();

$( "#el" ).click(function() {
  $("#toggle1").fadeToggle("fast");
  if($("#plus1").attr("src") == "minus.png"){
       $("#plus1").attr("src","plus.png");
  }
    else{
        $("#plus1").attr("src","minus.png");
    }
   // $("#toggle1").css('font-size', '40px');
});

$( "#cc" ).click(function() {
  $("#toggle2").fadeToggle("fast");
  if($("#plus2").attr("src") == "minus.png"){
       $("#plus2").attr("src","plus.png");
  }
    else{
        $("#plus2").attr("src","minus.png");
    }
   // $("#toggle2").css('font-size', '40px');
});

function night(){
    if($('button').html() == 'Night Time'){
        $('div').css('background-color', 'black');
        $('div').css('color', 'white');
        $('button').html('Day Time');
    }
    else if($('button').html() == 'Day Time'){
        $('div').css('background-color', 'white');
        $('div').css('color', 'black');
        $('button').html('Regular');
    }
    else if($('button').html() == 'Regular'){
        $('div').css('background-color', '#7B7D7D');
        $('div').css('color', 'white');
        $('button').html('Night Time');
    }
}