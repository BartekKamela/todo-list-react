import { useSelector, useDispatch } from "react-redux";
import { Buttons, Button } from "./styled";
import { toggleHideDone, setAllDone, selectAreTaskEmpty, selectIsEveryTaskDone, selectHideDone } from "../tasksSlice";

const Menu = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Buttons>
        {!areTaskEmpty && (
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