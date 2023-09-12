import './App.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DataTable from './DataTable';
import Chart from './Chart';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import horseRace from './horse-race.png';
import ScrollingText from './ScrollingText';


function App() {

 const [currentSlide, setCurrentSlide] = useState(0);

 const datasets = [
	 { 
		 title: "Mayor of Memphis",
		 data: 
			[
				{ name: "Carnita Atwater", vote: 0 },
				{ name: "Jennings Bernard", vote: 0 },
				{ name: "Floyd Bonner", vote: 0 },
				{ name: "Joe Brown", vote: 1 },
				{ name: "Kendra C. Calico", vote: 0 },
				{ name: "Karen Camper", vote: 0 },
				{ name: "J.W. Gibson", vote: 4 },
				{ name: "Reggie Hall", vote: 0 },
				{ name: "James Harvey", vote: 0 },
				{ name: "Willie Herenton", vote: 2 },
				{ name: "Michelle McKissack", vote: 0 },
				{ name: "Brandon A. Price", vote: 0 },
				{ name: "Justina Ragland", vote: 0 },
				{ name: "Tekeva 'Keva' Shaw", vote: 0 },
				{ name: "Van Turner", vote: (61 + 6) },
				{ name: "Derek Winn", vote: 0 },
				{ name: "Paul Young", vote: 2 },
			],
	 },
	 {
		 title: "City Council - District 1",
		 data: [
  				{ name: "Kimberly Kelley", vote: (0 + 9) },
  				{ name: "Rhonda Logan", vote: (12 + 12) },
		],
	 },
	 {
		 title: "City Council - District 2",
		 data:
			[
  				{ name: "Keith L. Burks", vote: 0 },
  				{ name: "Will Frazier", vote: (1 + 65) },
				{ name: "Jerri Green", vote: (3 + 29) },
				{ name: "Scott McCormick", vote: 0 },
				{ name: "Rodanial Ray Ransom", vote: (7 + 1) },
				{ name: "Marvin White", vote: 0 },
			]
	},
	{
		title: "City Council - District 3",
	 	data:
	 		[
				{ name: "Ricky Dixon", vote: 2 },
				{ name: "James Kirkwood", vote: (0 + 6) },
				{ name: "Kawanias 'Kaye' McNeary", vote: 0 },
				{ name: "Towanna C. Murphy", vote: 0 },
				{ name: "Pearl Eva Walker", vote: 31 },
			],
	},
	{
	 	title: "City Council - District 4",
	 	data:
	 		[
				{ name: "Teri Dockery", vote: (2 + 62) },
				{ name: "Jana Swearengen-Washington", vote: (7 + 27) },
			],
	},
	{
		title: "City Council - District 5",
		data: 
			[
				{ name: "Luke Hatler", vote: 0 },
				{ name: "Meggan Wurzburg Kiel", vote: (12 + 35) },
				{ name: "Philip Spinosa", vote: 0 },
			],
	},
	{
		title: "City Council - District 6",
		data:
			[
				{ name: "Keith D Austin II", vote: 0 },
				{ name: "Edmund H. Ford Sr", vote: (1 + 34) },
				{ name: "Larry Hunter", vote: (0 + 2) },
			],
	},
	{
		title: "City Council - District 7",
		data:
			[
				{ name: "Edward Douglas", vote: (0 + 1) },
				{ name: "Michalyn Easter-Thomas", vote: (10 + 22) },
				{ name: "Jimmy Hassan", vote: 0 },
				{ name: "Jarret 'JP' Parks", vote: 1 },
				{ name: "Dee Reed", vote: (0 + 1) },
				{ name: "Austin Rowe", vote: (0 + 2) },
				{ name: "Larry Springfield", vote: 0 },
			],
	},
	{
		title: "City Council - Super District 8 - Position 1",
		data:
			[
				{ name: "JB Smiley Jr", vote: (3 + 33) },
			],
	},
	{
		title: "City Council - Super District 8 - Position 2",
		data:
			[
				{ name: "Marion LaTroy A-Williams Jr", vote: 0 },
				{ name: "Davin D. Clemons", vote: (2 + 21) },
				{ name: "Janika White", vote: (9 + 22) },
			],
	},
	{
		title: "City Council - Super District 8 - Position 3",
		data:
			[
				{ name: "Berlin F. Boyd", vote: 0 },
				{ name: "Lucille Catron", vote: 0 },
				{ name: "Yolanda Cooper-Sutton", vote: (0 + 1) },
				{ name: "Brian Harris", vote: (3 + 132) },
				{ name: "Damon Curry Morris", vote: 1 },
				{ name: "Jerred Price", vote: (109 + 112) },
				{ name: "Paul Randolph, Jr.", vote: 0 },
			],
	},
	{
		title: "City Council - Super District 9 - Position 1",
		data: 
			[
				{ name: "Chase Carlisle", vote: (0 + 1) },
				{ name: "Benji Smith", vote: (3 + 18) },
			],
	},
	{
		title: "City Council - Super District 9 - Position 2",
		data:
			[
				{ name: "Ford Canale", vote: (8 + 3) },
				{ name: "Brandon D. Washington", vote: (1 + 22) },
			],
	},
	{
		title: "City Council - Super District 9 - Position 3",
		data:
			[
				{ name: "Jeff Warren", vote: (11 + 31) },
			],
	},
 ];

 const sliderSettings = {
	 autoplay: true,
	 autoplaySpeed: 6000, // this changes how long it stays on the same slide - default 3000
	 dots: true,
	 infinite: true,
	 lazyload: true,
	 speed: 500, // this changes how fast it transitions between slides - default 500
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 afterChange: (index) => {
		 setCurrentSlide(index); 
	 },
 };


  return (
    <div className="App">
	  
	<h1 className="full-width">
	  <img src={horseRace} alt="horse race" className="headerImage" />
	  <span className="headerText">Blue Derby Race to the Top!</span>
	</h1>
      <div className={`chartSection mobile-hide`}>
        <Slider {...sliderSettings}>
          {datasets.map((dataset, index) => (
            <div key={index}>
              <Chart data={dataset.data} currentSlide={currentSlide} title={dataset.title}/>
            </div>
          ))}
        </Slider>
      </div>

	  <ScrollingText />

	  {datasets.map((dataset, index) => (
		  <div key={index}>
		  	<DataTable data={dataset.data} title={dataset.title} />
		  </div>
	  ))}
	  <div className="spacer"></div>
    </div>
  );
}

export default App;
