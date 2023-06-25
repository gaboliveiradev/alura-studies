import React, { useState } from 'react';

import FormComponent from '../components/Form/FormComponent';
import ListComponent from '../components/List/ListComponent';
import StopwatchComponent from '../components/Stopwatch/StopwatchdComponent';

import './style.scss';
import { ITask } from '../types/ITask';

function App() {
  const [tasks, setTask] = useState<ITask[] | []>([])

  return (
    <div className="AppStyle">
      <section>
        <div className='formAndStopWatch'>
          <FormComponent setTask={setTask} />
          <StopwatchComponent />
        </div>
        <ListComponent tasks={tasks}/>
      </section>
    </div>
  );
}

export default App;