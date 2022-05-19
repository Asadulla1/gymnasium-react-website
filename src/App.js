import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>

      <h1>Hello From Crossfit Gym</h1>
    </div>
  );
}

export default App;
