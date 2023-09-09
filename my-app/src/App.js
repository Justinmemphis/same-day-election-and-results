import './App.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Chart from './Chart';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import horseRace from './horse-race.png';


function App() {

 const [currentSlide, setCurrentSlide] = useState(0);

 const datasets = [
	 { 
		 title: "Mayor of Memphis",
		 data: 
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
	 },
	 {
		 title: "City Council - District 1",
		 data: [
  				{ name: "Kimberly Kelley", vote: 1 },
  				{ name: "Rhonda Logan", vote: 3 },
		],
	 },
	 {
		 title: "City Council - District 2",
		 data:
			[
  				{ name: "Keith L. Burks", vote: 1 },
  				{ name: "Will Frazier", vote: 3 },
				{ name: "Jerri Green", vote: 5 },
				{ name: "Scott McCormick", vote: 8 },
				{ name: "Rodanial Ray Ransom", vote: 13 },
				{ name: "Marvin White", vote: 21 },
			]
	},
	{
		title: "City Council - District 3",
	 	data:
	 		[
				{ name: "Ricky Dixon", vote: 1 },
				{ name: "James Kirkwood", vote: 3 },
				{ name: "Kawanias 'Kaye' McNeary", vote: 5 },
				{ name: "Towanna C. Murphy", vote: 8 },
				{ name: "Pearl Eva Walker", vote: 13 },
			],
	},
	{
	 	title: "City Council - District 4",
	 	data:
	 		[
				{ name: "Teri Dockery", vote: 1 },
				{ name: "Jana Swearengen-Washington", vote: 3 },
			],
	},
	{
		title: "City Council - District 5",
		data: 
			[
				{ name: "Luke Hatler", vote: 1 },
				{ name: "Meggan Wurzburg", vote: 3 },
				{ name: "Philip Spinosa", vote: 8 },
			],
	},
	{
		title: "City Council - District 6",
		data:
			[
				{ name: "Keith D Austin II", vote: 1 },
				{ name: "Edmund H. Ford Sr", vote: 3 },
				{ name: "Larry Hunter", vote: 5 },
			],
	},
	{
		title: "City Council - District 7",
		data:
			[
				{ name: "Edward Douglas", vote: 1 },
				{ name: "Michalyn Easter-Thomas", vote: 3 },
				{ name: "Jimmy Hassan", vote: 5 },
				{ name: "Jarret 'JP' Parks", vote: 8 },
				{ name: "Dee Reed", vote: 13 },
				{ name: "Austin Rowe", vote: 21 },
				{ name: "Larry Springfield", vote: 34 },
			],
	},
	{
		title: "City Council - Super District 8 - Position 1",
		data:
			[
				{ name: "JB Smiley Jr", vote: 1 },
			],
	},
	{
		title: "City Council - Super District 8 - Position 2",
		data:
			[
				{ name: "Marion LaTroy A-Williams Jr", vote: 1 },
				{ name: "Davin D. Clemons", vote: 3 },
				{ name: "Janika White", vote: 5 },
			],
	},
	{
		title: "City Council - Super District 8 - Position 3",
		data:
			[
				{ name: "Berlin F. Boyd", vote: 1 },
				{ name: "Lucille Catron", vote: 3 },
				{ name: "Yolanda Cooper-Sutton", vote: 5 },
				{ name: "Brian Harris", vote: 8 },
				{ name: "Damon Curry Morris", vote: 13 },
				{ name: "Jerred Price", vote: 21 },
				{ name: "Paul Randolph, Jr.", vote: 34 },
			],
	},
	{
		title: "City Council - Super District 9 - Position 1",
		data: 
			[
				{ name: "Chase Carlisle", vote: 1 },
				{ name: "Benji Smith", vote: 3 },
			],
	},
	{
		title: "City Council - Super District 9 - Position 2",
		data:
			[
				{ name: "Ford Canale", vote: 1 },
				{ name: "Brandon D. Washington", vote: 3 },
			],
	},
	{
		title: "City Council - Super District 9 - Position 3",
		data:
			[
				{ name: "Jeff Warren", vote: 1 },
			],
	},
 ];

 const sliderSettings = {
	 autoplay: true,
	 dots: true,
	 infinite: true,
	 lazyload: true,
	 speed: 500,
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 afterChange: (index) => {
		 setCurrentSlide(index); 
	 },
 };


  return (
    <div className="App">
	  
	<h1 className="full-width"><img src={horseRace} alt="horse race" className="headerImage" />
	  <span className="headerText">Blue Derby Race to the Top!</span>
	</h1>
      <div className="chartSection">
        <Slider {...sliderSettings}>
          {datasets.map((dataset, index) => (
            <div key={index}>
              <Chart data={dataset.data} currentSlide={currentSlide} title={dataset.title}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
