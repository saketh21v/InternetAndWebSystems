function openTrending(){
    var main = document.getElementById("Main");
    main.childNodes[1].setAttribute("hidden", true);
    main.childNodes[3].removeAttribute("hidden");
}

function openHome(){
    var main = document.getElementById("Main");
    main.childNodes[3].setAttribute("hidden", true);
    main.childNodes[1].removeAttribute("hidden");
}

function addTopic() {
    var nav = document.getElementById("left-nav-bar");
    var text = prompt("Enter the topic name");
    var ul = nav.children[0];
    var newLi = document.createElement('li');
    var ahref = document.createElement('a');
    ahref.setAttribute('href', '#');
    ahref.innerHTML = text;
    newLi.appendChild(ahref);
    ul.appendChild(newLi);
}

function changeCat(topic){
    console.log(topic);
    document.getElementById('inputCat').value = topic;
    document.forms[0].submit();
}