//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function () {

    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

// Main script starts here
var _CART = {};
var _PRICES = {};
var imgPath = 'images/';
var items = {
    "books": ["1984.jpg", "Complete works of Leo Tolstoy.jpg", "Harry Potter and the Cursed Child.jpg", "The Casual Vacancy.jpg", "The Complete Sherlock Holmes.jpg", "War and Peace.jpg"],
    "electronics": ["canon_eos_5d_1.jpg", "canon_eos_5d_2.jpg", "canon_eos_5d_3.jpg", "elec.jpg", "ipod_classic_1.jpg"]
}

items['books'].map(item => {
    _CART[item.substr(0, item.indexOf('.'))] = 0;
    _PRICES[item.substr(0, item.indexOf('.'))] = Math.round(Math.random() * 100);
});

items['electronics'].map(item => {
    _CART[item.substr(0, item.indexOf('.'))] = 0;
    _PRICES[item.substr(0, item.indexOf('.'))] = Math.round(Math.random() * 100);
});


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
        items[cat].forEach(function (item) {
            var elem = document.createElement('div');
            elem.className = 'col-md-2';
            var img = document.createElement('img');
            img.setAttribute('src', imgPath + cat + "/" + item);
            elem.appendChild(img);
            var tNode = document.createElement('div');
            tNode.innerHTML = item.substr(0, item.indexOf('.'));
            elem.appendChild(tNode);
            var addRemove = `<div class="input-group">
                            <span class="input-group-btn">
                                <button onclick="javascript:removeItem('${item.substr(0, item.indexOf('.'))}')" type="button" class="btn btn-danger btn-number" item="${ item.substr(0, item.indexOf('.'))}" data-type="minus" data-field="quant[2]">
                                    <span class="glyphicon glyphicon-minus"></span>
                                </button>
                            </span>
                            <input id="${item.substr(0, item.indexOf('.'))}" type="text" name="quant[2]" class="form-control input-number" value="${_CART[ item.substr(0, item.indexOf('.'))]}" min="0" max="10">
                            <span class="input-group-btn">
                                <button onclick="javascript:addItem('${item.substr(0, item.indexOf('.'))}')" type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]" item="${ item.substr(0, item.indexOf('.'))}">
                                    <span class="glyphicon glyphicon-plus"></span>
                                </button>
                            </span>
                            </div>`;
            var dr = document.createElement('div');
            dr.innerHTML = addRemove;
            elem.appendChild(dr);
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

items['books'].forEach(function (item) {
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


function addItem(item) {
    console.log('Item: ' + item);
    _CART[item] += 1;
    document.getElementById(item).value = (_CART[item]);
}

function removeItem(item) {
    _CART[item] -= 1
    if (_CART[item] < 0) _CART[item] = 0;
    document.getElementById(item).value = (_CART[item]);
}


console.log(items);
console.log('Consoled');

function fillTable() {
    var tableItems = Object.keys(_CART).filter(val => _CART[val] > 0);
    var tbody = document.getElementById('tbody');

    while (tbody.childElementCount > 1) {
        tbody.removeChild(tbody.lastElementChild);
    }

    tableItems.map(item => {
        var tr = document.createElement('tr');
        var row = `<td>${item}</td><td>${"Rs. " + _PRICES[item]}</td><td>${_CART[item]}</td><td>${"Rs. " + _CART[item] * _PRICES[item]}</td>`
        tr.innerHTML = row;
        tbody.appendChild(tr);
    });
}