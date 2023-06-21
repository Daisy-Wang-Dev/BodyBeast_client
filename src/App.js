import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MenuBar from "./components/MenuBar/MenuBar";
import HomePage from "./pages/HomePage/HomePage";
import Routines from "./pages/Routines/Routines";
import RoutineDetails from "./pages/RoutineDetails/RoutineDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/routines" element={<Routines/>}/>
            <Route path="/routines/:routineId" element={<RoutineDetails/>}/>


          </Routes>
        <MenuBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
