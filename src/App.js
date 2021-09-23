import Home from "./components/Home";
import Loader from "./components/Loader";
import SideBar from "./components/SideBar"
import Settings from "./components/Settings";
import Apps from "./components/Apps";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";
import "./css/variables.css";
import "./js/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Loader />
          <div className="side">
            <SideBar/>
          </div>
          <div className="main">
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/apps">
              <Apps/>
            </Route>
        </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
