//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { SecondsCounter } from "./component/secondscounter.js";

//render your react application
let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 1000000);
	const five = Math.floor(counter / 100000);
	const four = Math.floor(counter / 10000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;

	console.log(counter);
	ReactDOM.render(
		<SecondsCounter
			digOne={one}
			digTwo={two}
			digThree={three}
			digFour={four}
			digFive={five}
			digSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
