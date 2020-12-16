// import logo from './logo.svg';
import './App.css';
import Editor from "./Editor/Editor"
import style from "./static/style";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
      <header className="App-header"></header>
      { style }
      <Editor />
    </div>
  );
}

export default App;
