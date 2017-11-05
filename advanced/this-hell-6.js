var a = 100;
var Widget = {
    a: 2,
    initF: function () {
        console.log(this);
        console.log(this.a);
    },
    initA: () => {
        console.log(this);
        console.log(this.a);
        this.initF();
    }
};

console.log("Functional");
Widget.initF();
console.log("Arrow");
Widget.initA();