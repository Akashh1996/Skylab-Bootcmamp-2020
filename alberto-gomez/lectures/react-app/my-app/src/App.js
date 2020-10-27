import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Skylab es la mejor bootcamp del mundo!</p>
				<a
					className="App-link"
					href="https://www.skylabcoders.com/es"
					target="_blank"
					rel="noopener noreferrer"
				>
					Skylab mola!
				</a>
			</header>
		</div>
	);
}

export default App;
