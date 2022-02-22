var menuContainer = document.getElementsByClassName("menu-items");
var items = menuContainer.getElementsByClassName("item");
function highlight1(){
    var curr = document.getElementsByClassName("active");
    var newItem = document.getElementsByClassName("item1");
    newItem.className+= " active";
    curr.className.replace(" active","");
}
function highlight2(){
    var curr = document.getElementsByClassName("active");
    var newItem = document.getElementsByClassName("item2");
    newItem.className+= " active";
    curr.className.replace(" active","");
}
function highlight3(){
    var curr = document.getElementsByClassName("active");
    var newItem = document.getElementsByClassName("item3");
    newItem.className+= " active";
    curr.className.replace(" active","");
}
