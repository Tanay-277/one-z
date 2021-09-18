import Home from "./components/Home";
import SideBar from "./components/SideBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";
import "./css/variables.css";

function App() {
  return (
    <>
    <div className="side">
      <SideBar />
    </div>
    <div className="main">
      <Home />
    </div>
    </>
  );
}

export default App;
