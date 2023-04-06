import "./style.css";

const Menu = ({ tasks, hideDone }) => (
    <div className="menu">
        {tasks.length > 0 && (
            <>
                <button className="menu__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
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