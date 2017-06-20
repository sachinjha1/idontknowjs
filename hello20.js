//closure - ability of function to remember its lexical scope even when function
//is executed outside its lexical scope.
//closure maintains deep nested scope

function foo(){
  var bar = 'bar';

  function baz(){
    console.log(bar);
  }
  bam(baz);

}

function bam(baz){
  baz(); //bar
}

foo();
