import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { PageSearch } from './pages/pageSearch/index';
import { PageResult } from './pages/pageResult/index';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/perfil">
          <PageResult/>
        </Route>
        <Route exact path="/">
          <PageSearch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
