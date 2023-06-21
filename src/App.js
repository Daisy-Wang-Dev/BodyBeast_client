import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MenuBar from "./components/MenuBar/MenuBar";
import HomePage from "./pages/HomePage/HomePage";
import Routines from "./pages/Routines/Routines";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/routines" element={<Routines/>}/>
          </Routes>
        <MenuBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
