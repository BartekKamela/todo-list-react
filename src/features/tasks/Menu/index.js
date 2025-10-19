import { useSelector, useDispatch } from "react-redux";
import { Buttons, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Menu = ({ setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <Buttons>
        {tasks.length > 0 && (
            <>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </Buttons>
    )
};

export default Menu;