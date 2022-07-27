const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "Calculator.html");
});

app.post("/", function (req, res) {
	heigh = parseFloat(req.body.Height);
	weigh = parseFloat(req.body.Weight);
	bmi = weigh / (heigh * heigh);

	bmi = bmi.toFixed();

	req_name = req.body.Name;

	if (bmi < 18.5) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Underweight! &nbsp You should eat a little bit more!");
	} else if (18.5 <= bmi && bmi < 24.9) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Normalweight! &nbsp Keep doing what you are doing");
	} else if (24.9 <= bmi && bmi < 29.9) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Overweight! &nbsp You should cut down on your food a little bit!!");
	} else {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Obese! &nbsp You should really do something about your appetite ASAP!!!");
	}
});

app.listen(3000, function () {
	console.log("port active at 3000");
});
