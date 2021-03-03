function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    li.appendChild(document.createTextNode(inputValue));
    document.getElementById("list").appendChild(li);
    document.getElementById("myInput").value = "";
    li.setAttribute("onclick", "remove(this)");

}




// checking off item on list
function remove(element) {
    element.style.setProperty("text-decoration", "line-through");
    setTimeout(function() {element.remove()}, 1000);
}