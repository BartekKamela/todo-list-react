import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Menu from "./Menu";
import Button from "./Button";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
        extraHeaderContent={
          <Button />
        }
      />
      <Section
        title="Wyszukiwarka"
        content={<Search />}
      />
      <Section
        title="Lista zadań"
        content={
          <TasksList />
        }
        extraHeaderContent={
          <Menu />
        }
      />
    </Container>
  );
}

export default TasksPage;
