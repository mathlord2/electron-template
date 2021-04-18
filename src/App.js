import './App.css';

const electron = window.require("electron");

function App() {
  return (
    <div className="App">
      Hello World
      <button onClick={() => electron.shell.openExternal("https://google.ca")}>Hi</button>
    </div>
  );
}

export default App;
