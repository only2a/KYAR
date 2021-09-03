
//ЗАДАНИЕ 1
let land = document.getElementById('land'); 

// отслеживаем нажатие
     land.onmousedown = function(q) { 

//картинка будет там же, но уже в абсолютных координатах
     land.style.position = 'absolute'; 
     move(q); 



// показывем картинку над другими элементами
     land.style.zIndex = 1000;  

// передвигаем картинку под координаты курсора
// и сдвигаем на половину ширины/высоты для центрирования
     function move(q) { 
     land.style.left = q.pageX - land.offsetWidth / 2 + 'px'; 
     land.style.top = q.pageY - land.offsetHeight / 2+ 'px'; } 

// перемещение по экрану     
     document.onmousemove = function(q) { move(q); } 

//отслеживаем окончание переноса     
     land.onmouseup = function() { 
     document.onmousemove = null; 
     land.onmouseup = null;
     } 
   }
//ТЕКСТ
let tt = document.getElementById('txt');
tt.onmousedown = function(e) {
     tt.style.position = 'absolute';
     move(e);
  
     function move(e) { 
     tt.style.left = e.pageX - tt.offsetWidth / 2 + 'px'; 
     tt.style.top = e.pageY - tt.offsetHeight / 2 + 'px'; } 

     document.onmousemove = function(e) { move(e); }     
     tt.onmouseup = function() { 
     document.onmousemove = null; 
     tt.onmouseup = null;
     } 
   }
//ЗАДАНИЕ 2   
let task = document.getElementById('task3'); 
function fun3(){
          let t = Date.now();   
          let s = setInterval(function() 
            {
            let P = Date.now() - t;
            // изменение лефт,зависящее от P
            task.style.left = P / 3 + 'px';
            if (P > 2000) clearInterval(s);    
            }, 20);
        
    }

//ЗАДАНИЕ 4 И 5
function fun4(){
    var c, k;
    c=Number(document.getElementById("s1").value);
    if(document.getElementById("1").checked)
    k=Number(document.getElementById("1").value);
    else if(document.getElementById("2").checked)
    k=Number(document.getElementById("2").value);
    else if(document.getElementById("3").checked)
    k=Number(document.getElementById("3").value);
    else if(document.getElementById("4").checked)
    k=Number(document.getElementById("4").value); 
    //    Задаем position:absolute в стиле для всех div
        document.write(" <style>div{position:absolute}</style> ");    
    //    w,h - ширина и высота экрана соответственно; (x0,y0)- координаты центра экрана
        w=screen.width; h=screen.height;    
        x0=w/2; y0=h/2;    
    //    Рисуем координатные оси с центром в (x0,y0)
        for (i=1; i<w; i=i+8) document.write( " <div style='top: " +y0+ " ; left: " +i+ " '>_</div> " );    
        for (i=1; i<h; i=i+8) document.write( " <div style='left: " +x0+ " ; top: " +i+ " '>|</div> " );    
    //    Назначаем коэффициенты масштабирования графика по x (kx) и y (ky)
        kx= w/20; ky= h/20;    
    //   Цвет пера
        if(c==1)
        document.write("<font color=black>");    
        else if(c==2)
        document.write("<font color=green>");
        else if(c==3)
        document.write("<font color=red>");
      
    //    В цикле по х от -10 до 10 с шагом 0.01
        for ( x = - 10; x < 10; x = x + 0.01 )    
        {    
    //    Выборка значения 
    if(k==1)
        y=x*x;    
        else if(k==2)
        y=x*x*x;
        else if(k==3)
        y=Math.sin(x);
        else if(k==4)
        y=Math.cos(x);
    //    И в соответствующем месте экрана ставим точку
        document.write("<div style='left:"+(x0+kx*x)+";top:"+(y0-ky*y )+" '>.</div>");    
        }    
 }
//ЗАДАНИЕ 6
 document.getElementById('nav').onmouseover= function(event) {
    var t = event.target;
    if (t.className == 'menu-item') {
        var s=t.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
document.onmousemove=function(event) {
    var t = event.target; 
    console.log(event.target);
    if (t.className!='menu-item' && t.className!='submenu') {
        closeMenu();
    }
}
function closeMenu(){
    
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}

