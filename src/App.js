import { Routes, Route } from "react-router-dom";
import { NavBar } from "../src/features/NavBar/NavBar.jsx";
import { MainPage } from "../src/pages/index.js";
import { Sidepanel } from "../src/features/Sidepanel/Sidepanel.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidepanel />
      <main className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
