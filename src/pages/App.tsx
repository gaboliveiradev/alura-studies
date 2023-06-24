import React, { useState } from 'react';

import FormComponent from '../components/Form/FormComponent';
import ListComponent from '../components/List/ListComponent';
import StopwatchComponent from '../components/Stopwatch/StopwatchdComponent';

import './style.scss';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="AppStyle">
      <section>
        <FormComponent />
        <StopwatchComponent />
        <ListComponent />
      </section>
    </div>
  );
}

export default App;