function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo,
    baaz: () => {
        console.log(this.a)
    }
};

obj.foo(); // 2
obj.baaz();