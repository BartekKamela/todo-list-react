import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import {toTask} from "../../../../routes";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParametr } from "../queryParameters";

const TasksList = () => {
    const query = useQueryParametr(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={toTask({id: task.id})}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        &#128465;
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;