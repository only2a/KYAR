function fun1() {
    document.getElementById("task1").style.color = "orange";
 }
 function fun2(){
     document.getElementById("task2").style.fontSize ="30px";
 }
 function fun3(){
    document.getElementById("task3").src="2.jpg";
 }
 function fun4(){
    document.body.innerHTML = document.body.innerHTML.replace('Задание 4', '<img src="1.jfif" width="300px">');
 }
 window.onload= function fun5(){
   
        var image = document.getElementById("task5");
       
        image.onmouseover = function(){
            this.style.width ="600px";
        };
        image.onmouseout = function(){
            this.style.width = "300px";
        };
    
 }
 function fun6(){
    document.getElementById("task6").style.border = "4px solid black";
    document.getElementById("task6").style.background = "antiquewhite";
    document.getElementById("task6").style.borderRadius = "10px";
 }