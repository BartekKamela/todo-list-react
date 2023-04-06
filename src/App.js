import React, { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";
import Menu from "./Menu";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
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
