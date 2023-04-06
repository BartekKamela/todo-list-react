import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`task${task.done && hideDone ? "task--hidden" : ""}`}
            >
                <button className="task__button task__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`task__item ${task.done ? "task__item--done" : ""}`}
                >
                    {task.content}
                </span>
                <button className="task__button task__button--remove">&#128465;</button>
            </li>
        ))}
    </ul>
);

export default Tasks;