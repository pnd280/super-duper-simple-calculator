import React from 'react';
import Button from './Button';

import './ResultCard.css';

const ResultCard = (props) => {
	const { histories } = props;

	return (
		<div>
			{histories.map((history) => {
				return (
					<div key={history.id} className="result-card">
						<div className="expression">
							{history.expression} ={' '}
							<span className="result">{history.result}</span>
						</div>
						<Button name="Delete" onClick={() => {props.onClick(history.id)}} />
					</div>
				);
			})}
		</div>
	);
};

export default ResultCard;
