import "./style.css";

const Menu = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="menu">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="menu__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                onClick={setAllDone}
                    className="menu__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Menu;