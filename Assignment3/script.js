function loadForm(e) {
    var inputForm = document.getElementById('inputForm');
    inputForm.innerHTML = "";
    var radios = document.getElementsByName("shape");
    var option;
    radios.forEach(function(element) {
        if (element.checked)
            option = element.value;
    }, this);
    switch (option) {
        case "Rect":
            var widthInput = document.createElement("input");
            widthInput.placeholder = "Width";
            widthInput.type = "Number";
            var heightInput = document.createElement("input");
            heightInput.placeholder = "Height";
            heightInput.type = "Number";
            inputForm.appendChild(widthInput);
            inputForm.appendChild(heightInput);
            break;
        case "Tri":
            var sides = [];
            for (var i = 0; i < 3; i++) {
                sides[i] = document.createElement("input");
                sides[i].placeholder = "Side" + (i + 1);
                sides[i].type = "Number";
                inputForm.appendChild(sides[i]);
            }
            break;
        case "Circ":
            var radiusInput = document.createElement("input");
            radiusInput.type = "number";
            radiusInput.placeholder = "Radius";
            inputForm.appendChild(radiusInput);
            break;
        case "Hex":
            var side = document.createElement("input");
            side.type = "number";
            side.placeholder = "Side length";
            inputForm.appendChild(side);
            break;
        default:
            break;
    }
}

window.onload = function(e) {
    // alert("load");
    var radios = document.getElementsByName("shape");
    radios.forEach(function(element) {
        element.onclick = loadForm;
    }, this);
}

function validate() {
    var canvas = document.getElementById("can");
    var radios = document.getElementsByName("shape");
    var option;
    radios.forEach(function(element) {
        if (element.checked)
            option = element.value;
    }, this);
    // alert(option);

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    var inputForm = document.getElementById('inputForm');

    switch (option) {
        case "Rect":
            ctx.strokeStyle = "Red";
            ctx.rect(10, 10, 80, 80);
            ctx.stroke();
            var width = parseInt(inputForm.children[0].value);
            var height = parseInt(inputForm.children[1].value);
            if (!Number.isNaN(height * width))
                alert("Area = " + height * width);
            break;
        case "Tri":
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "Blue";
            ctx.moveTo(10, 10);
            ctx.lineTo(120, 10);
            ctx.lineTo(80, 90);
            ctx.lineTo(10, 10);
            ctx.stroke();

            var a = parseInt(inputForm.children[0].value);
            var b = parseInt(inputForm.children[1].value);
            var c = parseInt(inputForm.children[2].value);
            var p = (a + b + c) / 2;
            var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            alert("Area = " + area);
            break;
        case "Circ":
            ctx.strokeStyle = "Black";
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case "Hex":
            ctx.strokeStyle = "Blue";
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(110, 80);
            ctx.lineTo(110, 140);
            ctx.lineTo(50, 170);
            ctx.lineTo(0, 140);
            ctx.lineTo(0, 80);
            ctx.closePath();
            ctx.fill();
            break;
        default:
            alert("Nothing");
            break;
    }
}