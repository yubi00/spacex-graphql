import "./App.css";
import Launches from "./components/Launches";
import logo from "./logo.jpg";

function App() {
  return (
    <div className='container'>
      <img
        src={logo}
        style={{ width: 300, display: "block", margin: "auto" }}
        alt='spacex'
      />
      <Launches />
    </div>
  );
}
export default App;
