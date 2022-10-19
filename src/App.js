import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2> Prova Surpresa de React Js </h2>
          <h5> 2022</h5>
        </div>
        <div className="navegacao">
        <p onClick={() => navigate('/exercicio1')}> Exercicio 1</p>        
        <p onClick={() => navigate('/exercicio2')}> Exercicio 2</p>        
        <p onClick={() => navigate('/exercicio3')}> Exercicio 3</p>        
        <p onClick={() => navigate('/exercicio4')}> Exercicio 4</p>        
        <p onClick={() => navigate('/exercicio5')}> Exercicio 5</p>        
        <p onClick={() => navigate('/exercicio6')}> Exercicio 6</p>        
        <p onClick={() => navigate('/exercicio7')}> Exercicio 7</p>        
        <p onClick={() => navigate('/exercicio8')}> Exercicio 8</p>        
        <p onClick={() => navigate('/exercicio9')}> Exercicio 9</p>        
        <p onClick={() => navigate('/exercicio10')}> Exercicio 10</p>        
        </div>
      </header>
    </div>
  );
}

export default App;
