var lineChartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [{
        label: "SES 3.4",
        fillColor: "rgba(255,255,255,0)",
        strokeColor: "#095386",
        pointColor: "rgba(9,83,134,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(9,83,134,1)",
        data: ["8086143", "9082653", "9403865", "9703856", "9903865", "10262429", "10262424", "10687635", "11652947"]
    }]

}

window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}