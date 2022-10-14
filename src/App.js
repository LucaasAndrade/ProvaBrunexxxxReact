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
  function exercicio4() {
    navigate('/exercicio4')
  }
  function exercicio5() {
    navigate('/exercicio5')
  }
  function exercicio6() {
    navigate('/exercicio6')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2> Prova Surpresa de React Js </h2>
          <h5> 2022</h5>
        </div>
        <div className="navegacao">
        <p onClick={exercicio1}> Exercicio 1</p>        
        <p onClick={exercicio2}> Exercicio 2</p>        
        <p onClick={exercicio3}> Exercicio 3</p>        
        <p onClick={exercicio4}> Exercicio 4</p>        
        <p onClick={exercicio5}> Exercicio 5</p>        
        <p onClick={exercicio6}> Exercicio 6</p>        
        </div>
      </header>
    </div>
  );
}

export default App;
