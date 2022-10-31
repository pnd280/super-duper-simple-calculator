import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		<div className="button" onClick={props.onClick}>{props.name}</div>
	);
};

export default Button;
