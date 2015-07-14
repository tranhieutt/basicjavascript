/**
 * Created by trantrunghieu on 7/10/15.
 */
var cars = ["Saab","Honda","BWM"];
console.log(cars.valueOf());

for (var i = 0;i < cars.length; i++){
    console.log(cars[i]);
}
console.log(cars.join(" and"));
cars.push("Volvo");
cars.push("Yamaha");
cars.push("oky");

console.log(cars.valueOf());

while (cars.length > 0){
    cars.pop();
    console.log(cars.valueOf());
}