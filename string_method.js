/**
 * Created by trantrunghieu on 7/13/15.
 */
var quotes = "There isn't really a  Objective-C, if the runtime can work out which implementation to use it will do it. But that's not to say that there aren't methods which aren't part of the documented interface. For those methods I think that a category is fine. Rather than putting the @interface at the top of the .m file like your point 2, I'd put it into its own .h file";

console.log(quotes);




var love = "love";
String.prototype.reserse = function() {
    var result = "";
    for (var i = this.length-1; i>=0;i--){
        result += this.charAt(i);
    }
    return result;
}
console.log(love.reserse());

var str = "Apple, Banana, Tree";
var fruit = str.split("-");
console.log(fruit);
