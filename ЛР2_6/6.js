var x;
function fun() {
   x = window.open("", "Окно", "width=500, height=400");
}
function fun2() {
   x.document.write("text ");
   x.document.write(x.name);
}
function fun3() {
   x.close();
}
 
 

document.write("<br/>");
document.write("<table>");
document.write("</tr>");
document.write("<td>" + "Условие" + "</td>");
document.write("<td>" + "Свойство" + "</td>");
document.write("<td>" + "Значение" + "</td>");
document.write("</tr>");
document.write("<td>" + "Информация о браузере пользователя" + "</td>");
document.write("<td>" + "navigator.userAgent" + "</td>");
document.write("<td>" + navigator.userAgent + "</td>");
document.write("</tr>");
document.write("<td>" + "Версия  браузера" + "</td>");
document.write("<td>" + "navigator.appVersion" + "</td>");
document.write("<td>" + navigator.appVersion + "</td>");
document.write("</tr>");
document.write("<td>" + "Название браузера" + "</td>");
document.write("<td>" + "navigator.appName" + "</td>");
document.write("<td>" + navigator.appName + "</td>");
document.write("</tr>");
document.write("<td>" + "Кодовое название браузера" + "</td>");
document.write("<td>" + "navigator.appCodeName" + "</td>");
document.write("<td>" + navigator.appCodeName + "</td>");
document.write("</tr>");
document.write("<td>" + "ОС, которую использует пользователь" + "</td>");
document.write("<td>" + "navigator.platform" + "</td>");
document.write("<td>" + navigator.platform + "</td>");
document.write("</tr>");
document.write("<td>" + "Включена ли поддержка Java в браузере" + "</td>");
document.write("<td>" + "navigator.javaEnabled()" + "</td>");
document.write("<td>" + navigator.javaEnabled() + "</td>");
document.write("</tr>");
document.write("<td>" + "Ширина и высота экрана" + "</td>");
document.write("<td>" + "screen.width,screen.height" + "</td>");
document.write("<td>" +"Ширина:"+ screen.width + " | " +"Высота:"+  screen.height + "</td>");
document.write("</tr>");
document.write("<td>" + "Глубина цвета" + "</td>");
document.write("<td>" + "screen.colorDepth" + "</td>");
document.write("<td>" + screen.colorDepth + "</td>");
document.write("</tr>");
document.write(  "<td>" + "URL, которые были посещены в данном окне браузера" + "</td>");
document.write("<td>" + "history.length" + "</td>");
document.write("<td>" + history.length + "</td>");
document.write("</tr>");
document.write("<td>" + "URL текущего документа" + "</td>");
document.write("<td>" + "location.href" + "</td>");
document.write("<td>" + location.href + "</td>");
document.write("</tr>");
document.write("<td>" + "Путь к загруженному документу" + "</td>");
document.write("<td>" + "location.pathname" + "</td>");
document.write("<td>" + location.pathname + "</td>");
document.write("</tr>");
document.write("<td>" + "Имя домена загруженного документа" + "</td>");
document.write("<td>" + "location.hostname" + "</td>");
document.write("<td>" + location.hostname + "</td>");
document.write("</table>");