import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/main.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
