import { useSelector } from "react-redux";
import { useTasks } from "../../useTasks";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Menu from "./Menu";

function Tasks() {

  const {
    // tasks,
    // removeTask,
    setAllDone,
    // addNewTask,
  } = useTasks();

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
          <TasksList />
        }
        extraHeaderContent={
          <Menu
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
