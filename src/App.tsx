import React, { useState } from 'react';

import FormComponent from './components/Form/FormComponent';
import ListComponent from './components/List/ListComponent';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="App" style={APP_STYLE}>
      <section className='main' style={MAIN_STYLE}>
        <FormComponent />
        <ListComponent />
      </section>
    </div>
  );
}

export default App;

/* === ESTILIZAÇÃO DA PÁGINA === */

const APP_STYLE = {
  height: '100vh', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
}

const MAIN_STYLE = {
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center'
}