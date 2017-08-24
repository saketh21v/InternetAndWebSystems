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