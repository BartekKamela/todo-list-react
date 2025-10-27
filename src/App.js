import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";


export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li><NavLink activeClassName="active" to="/zadania">Zadania</NavLink></li>
                <li><NavLink activeClassName="active" to="/autor">Autor</NavLink></li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);
