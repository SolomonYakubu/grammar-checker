const Grammarbot = require("grammarbot");
const bot = new Grammarbot();
const text = `hi, am solomon i came here to tell you about myself i love playing football and that is the exact opposite dont worry when we meet ill tell you about it hope i am welcome`;
// const result = await bot.checkAsync("i cant remember how to go their");
let data = [];
bot.check(text, function (error, result) {
	if (!error) data = JSON.stringify(result.matches);
	
});
//console.log(JSON.stringify(result));
