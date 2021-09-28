const userInfo = require("./information")
console.log(userInfo)
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello i'm ${userInfo.name} from ${userInfo.campus} campus`,
    e : "oO",
    T : "U "
}));