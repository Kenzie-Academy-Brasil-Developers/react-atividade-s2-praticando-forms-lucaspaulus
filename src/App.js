import { useState } from 'react';
import './App.css';
import Form from './components/forms';
import Card from './components/card';

function App() {
  const [data, setData] = useState([])
  const [display, setDisplay] = useState("hide")

  function changeDisplay(){

      if(display === "hide"){
          setDisplay("show")
      }else{
          setDisplay("hide")
      }
  }

  return (
    <div className="App">
      <div className="dashboard">
          <header className='dashboard__header'>
              <p>LOGO</p>
               <button onClick={changeDisplay}>Iniciar Cadastro</button>
          </header>
          <Form display={display} exit={changeDisplay} data={data} setData={setData}></Form>
          <section className='dashboard__body'>
              <section className='dashboard__cards'>
                  <Card data={data}/>

              </section>
             
          </section>

          
      </div>
    </div>
  );
}

export default App;
