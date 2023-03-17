import "./style.css";

const Tasks = ({tasks, hiddenTasks}) => (
    <ul className="">
        {tasks.map(task => (
            <li
                className={`task${task.done && hiddenTasks ? "task--hidden" : ""}`}
            >
                <button className="task__button task__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`list__item ${task.done ? "list__item--done" : ""}`}
                >
                    {task.content}
                </span>
                <button class="task__button task__button--remove">&#128465;</button>
            </li>
        ))}
    </ul>
);

export default Tasks;