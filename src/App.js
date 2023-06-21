import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MenuBar from "./components/MenuBar/MenuBar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        <MenuBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
