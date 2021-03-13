import React from "react";
import PropTypes from "prop-types";

//create your first component

export function SecondsCounter(props) {
	return (
		<div className="container">
			<span className="badge badge-secondary">{props.digSix % 10}</span>
			<span className="badge badge-secondary">{props.digFive % 10}</span>
			<span className="badge badge-secondary">{props.digFour % 10}</span>
			<span className="badge badge-secondary">{props.digThree % 10}</span>
			<span className="badge badge-secondary">{props.digTwo % 10}</span>
			<span className="badge badge-secondary">{props.digOne % 10}</span>
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
