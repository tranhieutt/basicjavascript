/**
 * Created by trantrunghieu on 7/13/15.
 */
function add(a,b){
    return a+b;
}
console.log(add(2,3));

var cong = add;

console.log(cong(2,4));

var square = function (x){
    return x*x;
};

console.log(square(10));

add.description = function (){
    console.log ("Add two numbers");
};
add.description();
add.description.help = function (){
  console.log("In put two number");
};
add.description.help();
//handling exception
var addSafe;
addSafe = function (a, b) {
    return a + b;
};
addSafe(10,2);

console.log(addSafe(10,2));

function makeACupOfCoffe (){
    function boilWater(temprate){
        console.log("Dun nuoc");
    }
    function mixCoffeWithMilk (){
        console.log("Pha voi sua");
    }
    boilWater(10);
    mixCoffeWithMilk();
}
//makeACupOfCoffe();

onsole.log(makeACupOfCoffe());

