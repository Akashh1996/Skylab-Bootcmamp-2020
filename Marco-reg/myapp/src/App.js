import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>How to suck at Javascript a complete guide by Marco Regueiro</p>
        <p>Click on the Link below</p>
        <a class="linking"
          href="https://media4.giphy.com/media/6xcqPF9MTwChq/giphy.gif?cid=ecf05e4795rmtmc6t5l3q0ak3m1zi27io1dwlmwuqv510q0a&rid=giphy.gif"
          >Hey</a>

      </header>
    </div>
  );
}


export default App;
