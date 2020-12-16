// import logo from './logo.svg';
import './App.css';
import Editor from "./Editor/index"
import style from "./static/style";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      { style }
      <Editor />
    </div>
  );
}

export default App;
