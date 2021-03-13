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
	const digitos = counter.toString().padStart(6, "0");
	counter++;

	console.log(counter);
	ReactDOM.render(
		<SecondsCounter digitos={digitos} />,
		document.querySelector("#app")
	);
}, 1000);
