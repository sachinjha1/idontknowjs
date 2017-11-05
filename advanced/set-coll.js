var set = new Set();
set.add(1);
set.add(2);

console.log(set);
for (let a of set) {
    console.log(a);
}


var m = new Map();
var emp = {name: "sachin", age: 35};

m.set(emp, {year: 2018}); // Map saves key by reference...

console.log(m.get(emp));

emp.name = "praveen";

console.log(m.get(emp));

