//function scope - i in print() function will modify i of loopPrint()
function loopPrint() {

    function print() {
        //i=3;
        console.log(i);
    }



    for(let i=0;i<10;i++){
        print(i);
    }
}

loopPrint();