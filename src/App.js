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

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań"/>
      <Section 
        title="Dodaj nowe zadanie" 
        content={<Form />} 
      />
      <Section 
        title="Lista zadań" 
        content={<Tasks tasks={tasks} hideDone={hideDone} key={tasks.id} />} 
        extraHeaderContent={<Menu tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
