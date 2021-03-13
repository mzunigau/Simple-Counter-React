import React from "react";
import PropTypes from "prop-types";

//create your first component

export function SecondsCounter(props) {
	return (
		<div className="bigCounter">
			<div id="clock">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					fill="currentColor"
					className="bi bi-clock"
					viewBox="0 0 16 16">
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
				</svg>
			</div>
			<div>{props.digSix % 10}</div>
			<div>{props.digFive % 10}</div>
			<div>{props.digFour % 10}</div>
			<div>{props.digThree % 10}</div>
			<div>{props.digTwo % 10}</div>
			<div>{props.digOne % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digOne: PropTypes.number,
	digTwo: PropTypes.number,
	digThree: PropTypes.number,
	digFour: PropTypes.number,
	digFive: PropTypes.number,
	digSix: PropTypes.number
};
