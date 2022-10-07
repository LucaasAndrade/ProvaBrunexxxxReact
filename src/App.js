import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
  
  function exercicio1() {
    navigate('/exercicio1')
  }
  function exercicio2() {
    navigate('/exercicio2')
  }
  function exercicio3() {
    navigate('/exercicio3')
  }


  return (
    <div className="App">
      <header className="App-header">
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
        <div>
        <p onClick={exercicio1}> Exercicio 1</p>        
        <p onClick={exercicio2}> Exercicio 2</p>        
        <p onClick={exercicio3}> Exercicio 3</p>        
        </div>
      </header>
    </div>
  );
}

export default App;
