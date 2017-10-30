var imgPath = 'images/';
var items = {
    "books": ["1984.jpg", "Complete works of Leo Tolstoy.jpg", "Harry Potter and the Cursed Child.jpg", "The Casual Vacancy.jpg", "The Complete Sherlock Holmes.jpg", "War and Peace.jpg"],
    "electronics": ["canon_eos_5d_1.jpg", "canon_eos_5d_2.jpg", "canon_eos_5d_3.jpg", "elec.jpg", "ipod_classic_1.jpg"]
}

function navClick(cat) {
    var prev = document.getElementsByClassName('active')[0];
    prev.className = '';
    var current = document.getElementById(cat);
    current.className = 'active';
    var showCase = document.getElementById('showCase');
    while (showCase.hasChildNodes()) {
        showCase.removeChild(showCase.lastChild);
    }
    if (items[cat] != null)
        items[cat].forEach(function(item) {
            var elem = document.createElement('div');
            elem.className = 'col-md-2';
            var img = document.createElement('img');
            img.setAttribute('src', imgPath + cat + "/" + item);
            elem.appendChild(img);
            var tNode = document.createElement('div');
            tNode.innerHTML = item.substr(0, item.indexOf('.'));
            elem.appendChild(tNode);
            showCase.appendChild(elem);
            console.log('appended books ' + item);
        }, this);
}

function addTopic() {
    // var nav = 
    var text = prompt("Enter the topic name");
    var ul = document.getElementsByClassName("nav navbar-nav")[0];;
    var newLi = document.createElement('li');
    var ahref = document.createElement('a');
    ahref.setAttribute('href', '#');
    ahref.innerHTML = text;
    newLi.appendChild(ahref);
    ul.appendChild(newLi);
}






var cat = 'books';
var books = document.getElementById('showCase');

items['books'].forEach(function(item) {
    var elem = document.createElement('div');
    elem.className = 'col-md-2';
    var img = document.createElement('img');
    img.setAttribute('src', imgPath + cat + "/" + item);
    elem.appendChild(img);
    var tNode = document.createElement('div');
    tNode.innerHTML = item.substr(0, item.indexOf('.'));
    elem.appendChild(tNode);
    books.appendChild(elem);
    console.log('appended books ' + item);
}, this);



console.log(items);
console.log('Consoled');