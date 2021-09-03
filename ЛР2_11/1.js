
//Задание 1
$(document).ready(function(){
 $('.task1').mouseenter(function(){
    $(this).css('color','red');
});
$('.task1').mouseleave(function(){
    $(this).css('color','black');
});})
//Задание 2
$(document).ready(function(){
    $('.task2').click(function(){
        $(this).css('font-size','30px');
    });
    $('.task2').dblclick(function(){
        $(this).css('font-size','20px');
    });
})
//Задание 3
//attr('атрибут','значение')******.fadeOut-скрыть*******.fadein-показать
$(document).ready(function() {
    $('#task3').click(function() {
      $(this).fadeOut(1);
      $(this).attr('src','img/2.jpg' ).fadeIn(2);
    });
    $('#task3').dblclick(function() {
        $(this).fadeOut(1);
        $(this).attr('src','img/1.jpg' ).fadeIn(1);
      });
  });
  //ЗАдание 4
  $(document).ready(function() {
    $('#task4').click(function(){
        $(this).html('<img src="img/33.jpg" width="300px"/>')
    });
});
  //Задание 5
  $(document).ready(function(){
    $('#task5').mouseenter(function(){
        $(this).css("width","600px");
    })
    $('#task5').mouseleave(function(){
        $(this).css('width','300px');
    })
  });
  //Задание 6
  $(document).ready(function(){
    $('#task6').dblclick(function(){
        $(this).css("border","2px solid black");
        $(this).css("border-radius","12px");
        $(this).css("background-color","khaki");
        $(this).css("text-align","center");
 
    });});


