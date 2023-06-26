import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MenuBar from "./components/MenuBar/MenuBar";
import HomePage from "./pages/HomePage/HomePage";
import Routines from "./pages/Routines/Routines";
import RoutineDetails from "./pages/RoutineDetails/RoutineDetails";
import Setting from "./pages/Setting/Setting";
import History from "./pages/History/History";
import HistoryDetails from "./pages/HistoryDetails/HistoryDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/routines/:routineId" element={<RoutineDetails />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/histories" element={<History />} />
          <Route path="/histories/:routineId" element={<HistoryDetails />} />
        </Routes>
        <MenuBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
