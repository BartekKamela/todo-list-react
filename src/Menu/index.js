import "./style.css";

const Menu = ({ tasks, hiddenTasks }) => (
    <div className="menu">
        {tasks.length > 0 && (
            <>
                <button className="menu__button">
                    {hiddenTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
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