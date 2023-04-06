import React, { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";
import Menu from "./Menu";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Zapłacić rachunki", done: false },
    { id: 2, content: "Zrobić zakupy", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ 
      ...task,
      done: true,
     })));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
      />
      <Section
        title="Lista zadań"
        content={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            key={tasks.id}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Menu
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
