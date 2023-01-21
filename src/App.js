import "./style.scss";
import SideBar from "./components/SideBar";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="app">
      <div className="container">
        <SideBar />
        <Movies />
      </div>
    </div>
  );
}

export default App;
