import { Buttons, Button } from "./styled";

const Menu = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Buttons>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
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
);

export default Menu;