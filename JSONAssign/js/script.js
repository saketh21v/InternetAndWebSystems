const _STUDENTS = [{
        Name: 'AAAA',
        ID: '1',
        Marks: 28
    },
    {
        Name: 'BBBBB',
        ID: '2',
        Marks: 38
    },
    {
        Name: 'CCCCCC',
        ID: '3',
        Marks: 48
    },
    {
        Name: 'DDDDDD',
        ID: '4',
        Marks: 58
    },
    {
        Name: 'EEEEEE',
        ID: '5',
        Marks: 68
    },
    {
        Name: 'FFFFFF',
        ID: '6',
        Marks: 78
    }
];

var options = document.getElementById('Students');
var table = document.getElementById('Tablo');

var _SELECT_STUDENT = _STUDENTS[0];

var button = document.getElementById('btn');
button.onclick = () => {
    var GPA = calcGPA(_SELECT_STUDENT.Marks);
    var row = document.getElementById('MAINROW');
    var gpaElem = document.createElement('td');
    gpaElem.innerHTML = GPA;
    row.appendChild(gpaElem);
};

_STUDENTS.forEach(function(student) {
    var s = document.createElement("option");
    s.setAttribute('value', student.Name);
    s.innerHTML = student.Name;
    options.appendChild(s);
}, this);

options.value = "SELECT STUDENT";


function dispDetails() {
    var name = options.value;
    let stu;
    for (var x = 0; x < _STUDENTS.length; x++) {
        if (name == _STUDENTS[x].Name) {
            stu = _STUDENTS[x];
            break;
        }
    }
    _SELECT_STUDENT = stu;
    if (table.childElementCount > 1)
        table.removeChild(table.lastChild);
    var row = document.createElement("tr");
    row.id = "MAINROW";
    var nElem = document.createElement('td');
    nElem.innerHTML = stu.Name;
    var iDElem = document.createElement('td');
    iDElem.innerHTML = stu.ID;
    var marksElem = document.createElement('td');
    marksElem.innerHTML = stu.Marks;

    row.appendChild(nElem);
    row.appendChild(iDElem);
    row.appendChild(marksElem);
    table.appendChild(row);
}

function calcGPA(marks) {
    var k = (marks * Math.random() / 10);
    k = Math.floor(k * 100) / 100;
    return k;
}