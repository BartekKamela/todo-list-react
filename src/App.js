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

const hiddenTasks = false;

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
        content={<Tasks tasks={tasks} hiddenTasks={hiddenTasks} key={tasks.id} />} 
        extraHeaderContent={<Menu tasks={tasks} hiddenTasks={hiddenTasks} />}
      />
    </Container>
  );
}

export default App;
