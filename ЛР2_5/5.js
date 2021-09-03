function fun1() {
    for(var i=0; i<document.all.length; i++) {
        document.write("Номер тега "+ document.all[i].tagName+ ":"+(i+1)+" |||| ");
    }

 }
 
 function fun2() {
 var d= new Array();
 for(var i=0; i<document.body.childNodes.length; i++) {
            
                d[i]=document.body.childNodes[i].tagName;
                
        }
        alert(d);
 }

 function fun3() {
    for (let i = 0; i < document.all.length; i++) {
       if (document.all[i].tagName == "SPAN") {
          alert("1) " + document.all[i].innerText);
          break;
       }
    }
    alert(
       "2) " + document.getElementsByTagName("span")[0].innerText
    );
    alert("3) " + document.getElementById("ok").innerText);
 }
 function fun4() {
    let x = 0;
    for (let i = 0; i < 5; i++) {
       x += Number(document.getElementsByClassName("averagescore")[i].innerText);
    }
    x /= 5;
    document.getElementsByTagName("span")[1].innerHTML = document.getElementsByTagName("span")[1].innerHTML + " " + x;
 }
 function fun5(){
 document.write(document.getElementsByClassName("classsss")[0].innerText);
 }