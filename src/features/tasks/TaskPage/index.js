import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

function TaskPage() {
    const { id } = useParams();

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={id}
                content={"nanana"}
            />
        </Container>
    );
}

export default TaskPage;
