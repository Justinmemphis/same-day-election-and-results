import './App.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Chart from './Chart';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import scdpLogo from './SCDP-letterhead-whitebg.png';


function App() {
 const datasets = [
	[
		{ name: "Carnita Atwater", vote: 57 },
		{ name: "Jennings Bernard", vote: 82 },
		{ name: "Floyd Bonner", vote: 36 },
		{ name: "Joe Brown", vote: 23 },
		{ name: "Kendra C. Calico", vote: 65 },
		{ name: "Karen Camper", vote: 91 },
		{ name: "J.W. Gibson", vote: 42 },
		{ name: "Reggie Hall", vote: 77 },
		{ name: "James Harvey", vote: 15 },
		{ name: "Willie Herenton", vote: 88 },
		{ name: "Michelle McKissack", vote: 49 },
		{ name: "Brandon A. Price", vote: 31 },
		{ name: "Justina Ragland", vote: 72 },
		{ name: "Tekeva 'Keva' Shaw", vote: 19 },
		{ name: "Van Turner", vote: 94 },
		{ name: "Derek Winn", vote: 63 },
	],
	[
  		{ name: "Justin", vote: 1 },
  		{ name: "Adrienne", vote: 2 },
	],
	[
  		{ name: "John Doe", vote: 3 },
  		{ name: "Jane Doe", vote: 27 },
	]
 ];

 const sliderSettings = {
	 autoplay: true,
	 dots: true,
	 infinite: true,
	 lazyload: true,
	 speed: 500,
	 slidesToShow: 1,
	 slidesToScroll: 1,
 };


  return (
    <div className="App">
	  
	<img src={scdpLogo} alt="SCDP Logo" className="headerImage" />
	<h1 className="full-width">Race for Mayor of Memphis</h1>
      <div className="chart-section">
	  <h1>Charts</h1>
        <Slider {...sliderSettings}>
          {datasets.map((subArray, index) => (
            <div key={index}>
              <Chart data={subArray} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
