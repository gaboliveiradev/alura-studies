import React, { useState } from 'react';

import FormComponent from './components/Form/FormComponent';
import ListComponent from './components/List/ListComponent';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <section>
        <FormComponent />
        <ListComponent />
      </section>
    </div>
  );
}

export default App;