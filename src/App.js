import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" />
          </Routes>
        </main>
        <MenuBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
