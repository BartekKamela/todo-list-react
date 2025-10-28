import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled";
import { toAuthor, toTasks, toTask } from "./routes";


export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li><StyledNavLink to="/zadania">Zadania</StyledNavLink></li>
                <li><StyledNavLink to="/autor">Autor</StyledNavLink></li>
            </ul>
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);
