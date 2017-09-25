var _USERS = {
    'User1': {
        'Mon': ['Event1', 'Event2', 'Event3'],
        'Tue': ['Event1', 'Event2'],
        'Wed': [],
        'Thu': ['Event1', 'Event2', 'Event3'],
        'Fri': ['Event1', 'Event2', 'Event3'],
    },
    'User2': {
        'Mon': ['Event2', 'Event3'],
        'Wed': ['Event45'],
        'Sat': ['Event1', 'Event2', 'Event3'],
        'Sun': ['Event1', 'Event35'],
    },
    'User3': {

    }
}

const _TIMES = ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Night'];
const _TIMES_SHORT = ['EMorn', 'Morn', 'Aft', 'Eve', 'Nig'];
const _DAY_IND = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function clearTable() {
    _TIMES_SHORT.map((time) => {
        var rows = document.getElementById(time).children;
        rows = Array.prototype.slice.call(rows);
        rows.map((row) => {
            if (_TIMES.indexOf(row.innerHTML) == -1) {
                row.innerHTML = "";
            }
        })
    });
}

function userSelect(user) {
    clearTable();
    Object.keys(_USERS[user]).map((day) => {
        console.log("Checking for day " + day);
        var events = _USERS[user][day];
        console.log(events);
        var cur = 0;
        events.map((event) => {
            console.log(event);
            var done = false;
            while (!done) {
                var time = _TIMES_SHORT[Math.floor(Math.random() * 100 % _TIMES_SHORT.length)];
                console.log('time = ' + time);
                var row = document.getElementById(time).children;
                // var row = document.getElementById(_TIMES_SHORT[cur++]).children;
                row = Array.prototype.slice.call(row);
                if (row[_DAY_IND.indexOf(day) + 1].innerHTML != "") {
                    console.log('Noppy: ' + row[_DAY_IND.indexOf(day) + 1].innerHTML);
                    continue;
                }
                row[_DAY_IND.indexOf(day) + 1].innerHTML = event;
                done = true;
            }
        });
    });
}

$(() => {
    Object.keys(_USERS).map((user) => {
        var div = document.createElement("div");
        div.className = "col-md-" + (12 / Object.keys(_USERS).length);
        div.onclick = () => { userSelect(user) };
        var btn = document.createElement("button");
        btn.className = "btn ";
        btn.setAttribute('type', "Button");
        btn.innerHTML = user;
        div.appendChild(btn);
        $('#user-select').append(div);
    });
});