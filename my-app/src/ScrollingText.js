import React from 'react';
import './ScrollingText.css';

const ScrollingText = () => {
	return (
		<div className="scrolling-text-container">
			<div className="scrolling-text">
				{/* Add scrolling text content here */}
				<span>This is a sample scrolling text. </span>
				<span>It can contain news updates, stock prices, etc.</span>
			</div>
		</div>
	);
};

export default ScrollingText;
