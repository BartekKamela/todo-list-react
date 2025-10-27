import { HashRouter, Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";


export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li><Link to="/zadania">Zadania</Link></li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
