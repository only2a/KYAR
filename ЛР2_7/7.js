function fun() {
    if (document.getElementById("snm").value.length == 0) {
       alert("Введите Фамилию");
       return 0;
    }
    if (document.getElementById("fnm").value.length == 0) {
       alert("Введите Имя");
       return 0;
    }
    if ( !document.getElementById("1").checked && !document.getElementById("2").checked && !document.getElementById("3").checked && !document.getElementById("4").checked) {
       alert("Укажите курс!");
       return 0;
    }  
    win = window.open();
 
    let kurs1;
    if (document.getElementById("1").checked)
       kurs1 = document.getElementById("1").value;
    else if (document.getElementById("2").checked)
       kurs1 = document.getElementById("2").value;
    else if (document.getElementById("3").checked)
       kurs1 = document.getElementById("3").value;
    else if (document.getElementById("4").checked)
       kurs1 = document.getElementById("4").value;
 
    win.document.write( "<u>"+document.getElementById("ttt").value+"</u> <br>" + "Студент <u>" + document.getElementById("snm").value + "</u> специальность <u>" + document.getElementById("s1").value + "</u> курс <u>" + kurs1 + "</u>  должен сдавать следующие предметы:<ul>" );
 
    let lesson = document.getElementsByName("lessons");
 
    for (i = 0; i < 5; i++) {
       if (lesson[i].checked)
          win.document.write("<li><u>" + lesson[i].value + "</u></li>");
    }
    win.document.write("</ul>");
 }

 function fun1() {
    let win;
    win = window.open();
    win.document.write("<select>");
    let lesson = document.getElementsByName("lessons");
    for (i = 0; i < 5; i++) {
       if (lesson[i].checked)
          win.document.write("<option><u>" + lesson[i].value + "</u></option>");
    }
 }
