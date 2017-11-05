const lists = [];
for (var i = 0; i < 5; i++) {
    lists.push(function () {
        return i;
    })
}

console.log(lists[0]());
console.log(lists[4]());