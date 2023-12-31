import React, { useState } from 'react';

import FormComponent from '../components/Form/FormComponent';
import ListComponent from '../components/List/ListComponent';
import StopwatchComponent from '../components/Stopwatch/StopwatchdComponent';

import './style.scss';
import { ITask } from '../types/ITask';

function App() {
  const [tasks, setTask] = useState<ITask[] | []>([])
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (taskSelected: ITask) => {
    setSelected(taskSelected);
    setTask(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })));
  }

  const finishTask = () => {
    if(selected) {
      setSelected(undefined);
      setTask(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            finished: true
          }
        }

        return task;
      }));
    }
  }

  return (
    <div className="AppStyle">
      <section>
        <div className='formAndStopWatch'>
          <FormComponent setTask={setTask} />
          <StopwatchComponent 
            selected={selected}
            finishTask={finishTask}
          />
        </div>
        <ListComponent 
          tasks={tasks}
          selectTask={selectTask}
        />
      </section>
    </div>
  );
}

export default App;