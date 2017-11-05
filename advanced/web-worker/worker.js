this.addEventListener("message", function (e) {
    console.log("Work thread got: " + e.data);
});

let i = 0;

setInterval(function () {
    this.postMessage("Counter got: " + i++);
}.bind(this), 500);