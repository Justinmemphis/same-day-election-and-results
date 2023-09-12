import React, { useState, useEffect } from 'react';

const DataTable = ({ data, title }) => {
	const [sortedData, setSortedData] = useState(data);

	useEffect(() => {
		const sorted = [...data];
		sorted.sort((a, b) => b.vote - a.vote); // sort in descending order based on vote
		
		setSortedData(sorted);
	}, [data]);

	return (
		<div className="seventyFive">
			<h2>{title}</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Votes</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((item, index) => (
						<tr key={index}>
							<td>{item.name}</td>
							<td>{item.vote}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
