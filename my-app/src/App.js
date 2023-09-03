import './App.css';
import HorizontalBarChart from './HorizontalBarChart';
import horseImage from './Donkey.png';
import scdpLogo from './SCDP-letterhead-whitebg.png';

const data = [
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
];

function App() {
  return (
    <div className="App">
	<img src={scdpLogo} alt="SCDP Logo" />
	<h1 className="full-width">Race for Mayor of Memphis</h1>
        <div className="chart-section full-width">
	        <HorizontalBarChart data={data} />
	</div>
	<div className="table-section">
	        <table>
        		<thead>
            			<tr>
					<th>Name</th>
					<th>Vote</th>
				</tr>
			</thead>
			<tbody>
				{data.map((entry, index) => (
					<tr key={index}>
						<td>{entry.name}</td>
						<td>{entry.vote}</td>
	        			</tr>
				))}
			</tbody>
		</table>
	</div>

    </div>
  );
}

export default App;
