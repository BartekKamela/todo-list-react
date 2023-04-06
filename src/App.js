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

  return (
    <Container>
      <Header title="Lista zadań"/>
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
          />
        } 
        extraHeaderContent={
          <Menu 
            tasks={tasks} 
            hideDone={hideDone} 
            toggleHideDone={toggleHideDone} 
          />
        }
      />
    </Container>
  );
}

export default App;
