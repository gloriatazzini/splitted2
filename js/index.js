function animazione(){
  $(".titolo1").addClass("animazione1");
  $(".titolo1").removeClass("titolo1");
  $(".titolo2").addClass("animazione2");
  $(".titolo2").removeClass("titolo2");
  $(".intro").css("display", "flex");
  $(".intro").hide();
  $(".intro").fadeIn(2000);
  setTimeout(function(){$(".immagine").fadeOut(2000);}, 2000);
  setTimeout(function(){$(".intro").fadeOut(1000);}, 5000);

  setTimeout(function(){$(".testo1").css("display", "flex");}, 6000);
  setTimeout(function(){$(".testo1").hide();}, 6000);
  setTimeout(function(){$(".testo1").fadeIn(2000);}, 6000);
  setTimeout(function(){$(".frecce1").css("display", "flex");}, 6000);
  setTimeout(function(){$(".frecce1").hide();}, 6000);
  setTimeout(function(){$(".frecce1").fadeIn(2000);}, 6000);

}

function more1(){
  $(".testo1").fadeOut(800);
  $(".frecce1").fadeOut(100);
  $(".immagine2").fadeIn(800);
  $(".testo2").css("display", "flex");
  $(".testo2").hide();
  $(".testo2").fadeIn(800);
  $(".frecce2").css("display", "flex");
  $(".frecce2").hide();
  $(".frecce2").fadeIn(800);
}

function more2(){
  $(".testo2").fadeOut(800);
  $(".immagine2").fadeOut(800);
  $(".frecce2").fadeOut(100);
  $(".testo3").css("display", "flex");
  $(".testo3").hide();
  $(".testo3").fadeIn(800);
  $(".immagine3").fadeIn(800);
  $(".frecce3").css("display", "flex");
  $(".frecce3").hide();
  $(".frecce3").fadeIn(800);
}
function more3(){
  $(".testo3").fadeOut(800);
  $(".frecce3").fadeOut(100);
  $(".immagine3").fadeOut(800);
  $(".testo4").css("display", "flex");
  $(".testo4").hide();
  $(".testo4").fadeIn(800);
  $(".immagine4").fadeIn(800);
  $(".frecce4").css("display", "flex");
  $(".frecce4").hide();
  $(".frecce4").fadeIn(800);
}
function more4(){
  $(".testo4").fadeOut(800);
  $(".frecce4").fadeOut(100);
  $(".immagine4").fadeOut(800);
  $(".testo5").css("display", "flex");
  $(".testo5").hide();
  $(".testo5").fadeIn(800);
  $(".immagine5").fadeIn(800);
  $(".frecce5").css("display", "flex");
  $(".frecce5").hide();
  $(".frecce5").fadeIn(800);
}
function more5(){
  $(".testo5").fadeOut(800);
  $(".frecce5").fadeOut(100);
  $(".immagine5").fadeOut(800);
  $(".testo6").css("display", "flex");
  $(".testo6").hide();
  $(".testo6").fadeIn(800);
  $(".frecce6").css("display", "flex");
  $(".frecce6").hide();
  $(".frecce6").fadeIn(800);
}
function back2(){
  $(".testo2").fadeOut(800);
  $(".frecce2").fadeOut(100);
  $(".immagine2").fadeOut(800);
  $(".testo1").css("display", "flex");
  $(".testo1").hide();
  $(".testo1").fadeIn(800);
  $(".frecce1").css("display", "flex");
  $(".frecce1").hide();
  $(".frecce1").fadeIn(800);
}

function back3(){
  $(".testo3").fadeOut(800);
  $(".frecce3").fadeOut(100);
  $(".immagine3").fadeOut(800);
  $(".immagine2").fadeIn(800);
  $(".testo2").css("display", "flex");
  $(".testo2").hide();
  $(".testo2").fadeIn(800);
  $(".frecce2").css("display", "flex");
  $(".frecce2").hide();
  $(".frecce2").fadeIn(800);
}

function back4(){
  $(".testo4").fadeOut(800);
  $(".frecce4").fadeOut(100);
  $(".immagine4").fadeOut(800);
  $(".immagine3").fadeIn(800);
  $(".testo3").css("display", "flex");
  $(".testo3").hide();
  $(".testo3").fadeIn(800);
  $(".frecce3").css("display", "flex");
  $(".frecce3").hide();
  $(".frecce3").fadeIn(800);
}

function back5(){
  $(".testo5").fadeOut(800);
  $(".frecce5").fadeOut(100);
  $(".immagine5").fadeOut(800);
  $(".immagine4").fadeIn(800);
  $(".testo4").css("display", "flex");
  $(".testo4").hide();
  $(".testo4").fadeIn(800);
  $(".frecce4").css("display", "flex");
  $(".frecce4").hide();
  $(".frecce4").fadeIn(800);
}
