import "./style.css";

const Tasks = ({ tasks, hiddenTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`task${task.done && hiddenTasks ? "task--hidden" : ""}`}
            >
                <button className="task__button task__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`task__item ${task.done ? "task__item--done" : ""}`}
                >
                    {task.content}
                </span>
                <button class="task__button task__button--remove">&#128465;</button>
            </li>
        ))}
    </ul>
);

export default Tasks;