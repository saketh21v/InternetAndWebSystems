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
        case "Circ":
            var radiusInput = document.createElement("input");
            radiusInput.type = "number";
            radiusInput.placeholder = "Radius";
            inputForm.appendChild(radiusInput);
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
    switch (option) {
        case "Rect":
            ctx.strokeStyle = "Red";
            ctx.rect(10, 10, 80, 80);
            ctx.stroke();
            break;
        case "Tri":
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "Blue";
            ctx.moveTo(10, 10);
            ctx.lineTo(120, 10);
            ctx.lineTo(80, 90);
            ctx.lineTo(10, 10);
            ctx.stroke();
            break;
        case "Circ":
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        default:
            break;
    }
}