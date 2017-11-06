let msg = null;

this.addEventListener("message", function (e) {
    console.log("Work thread got: ", e.data);
    msg = e.data;
});

setTimeout(function () {
    console.log("setTimeout got:", msg);
}, 1000);

let i = 0;

setInterval(function () {
    //this.postMessage("Counter got: ", i++);
}.bind(this), 500);