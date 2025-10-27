import { useSelector, useDispatch } from "react-redux";
import { Buttons, Button } from "./styled";
import {
    toggleHideDone,
    setAllDone,
    selectAreTaskEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    fetchExampleTasks
} from "../../tasksSlice";

const Menu = () => {
    const areTasksEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Buttons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Buttons>
    )
};

export default Menu;