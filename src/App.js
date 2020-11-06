import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import ListPage from "./components/movies/ListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route component={ListPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
