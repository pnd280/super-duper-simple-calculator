import React, { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';
import Button from './src/components/Button';

import './src/components/TextInput.css';
import './App.css';
import ResultCard from './src/components/ResultCard';

const SimpleCalc = () => {
	const [expression, setExpression] = useState('');
	const [result, setResult] = useState('');
	const [historyList, setHistoryList] = useState([
		{
			id: 1,
			expression: '1+1',
			result: 2,
		},
		{
			id: 2,
			expression: '2+3',
			result: 5,
		},
	]);
	const [query, setQuery] = useState('');
	const [filteredHistoryList, setFilteredHistoryList] = useState([]);

	// preview result
	useEffect(() => {
		let result = '';

		try {
			result = eval(expression);
		} catch (e) {}

		setResult(result);
	}, [expression]);

	// filter histories base on query
	useEffect(() => {
		if (query.length <= 0) {
			setFilteredHistoryList([]);
			return;
		}

		let results = historyList.filter((history) =>
			history.expression.includes(query)
		);

		if (results.length > 0) {
			setFilteredHistoryList(results);
			return console.log('Query results: ', results);
		}

		setFilteredHistoryList([]);
		console.log('No result found!');
	}, [query]);

	const saveHistory = () => {
		expression &&
			result &&
			setHistoryList([
				{
					id: Math.random(),
					expression,
					result,
				},
				...historyList,
			]);
	};

	const deleteHistory = (id) => {
		console.log('>> delete', id);
		setHistoryList(historyList.filter((history) => history.id !== id));
	};

	const handleSaveHistory = (event) => {
		event.preventDefault();
		saveHistory();
	};

	return (
		<View style={{ padding: 10 }}>
			<div className="container">
				<div className="calc-container">
					<form onSubmit={(event) => handleSaveHistory(event)}>
						<input
							placeholder={"Type here any expression :'("}
							onChange={(event) => {
								setExpression(event.target.value);
							}}
							value={expression}
						/>
					</form>
					<div>
						Preview result: <span className="result">{result}</span>
					</div>
					<Button name="Save to history" onClick={saveHistory} />
				</div>

				<hr />

				<div>
					<input
						placeholder={'Search for an expression'}
						onChange={(event) => setQuery(event.target.value)}
						value={query}
					/>
					<div className="history-container">
						<ResultCard
							histories={
								filteredHistoryList.length <= 0 && query.length <= 0
									? historyList
									: filteredHistoryList
							}
							onClick={deleteHistory}
						/>
					</div>
				</div>
			</div>
		</View>
	);
};

export default SimpleCalc;
