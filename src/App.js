import Editor  from './components/Editor';
import Timer from './components/Timer';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h3>Haskell Simple Code Editor with Timer</h3>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
              <Timer seconds={2}/>
            </div>
            <div className="col-md-12"><Editor /></div>
           
          </div>              
      </div>

      
    </div>
  );
}

export default App;
