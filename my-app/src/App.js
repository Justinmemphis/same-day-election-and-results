import './App.css';
import Chart from './Chart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import scdpLogo from './SCDP-letterhead-whitebg.png';

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

function App() {
  return (
    <div className="App">
	      <Router>
	  
	<img src={scdpLogo} alt="SCDP Logo" className="headerImage" />
	<h1 className="full-width">Race for Mayor of Memphis</h1>
      <div>
        <h1>Charts</h1>
        <nav>
          <ul>
            <li>
              <Link to="/chart/0">Chart 1</Link>
            </li>
            <li>
              <Link to="/chart/1">Chart 2</Link>
            </li>
            <li>
              <Link to="/chart/2">Chart 3</Link>
            </li>
          </ul>
        </nav>
	<Routes>
          {datasets.map((subArray, index) => (
            <Route key={index} path={`/chart/${index}`} render={() =>
		    <Chart data={subArray} />} />
          ))}
	  </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
