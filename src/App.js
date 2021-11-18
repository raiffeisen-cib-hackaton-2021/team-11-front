import { Routes, Route } from "react-router-dom";
import { NavBar } from "features/NavBar/NavBar";
import { MainPage } from "pages";
import { Sidebar } from "features/Sidepanel/Sidebar";
import { Topic } from "pages/topics/topic";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/topics/:topic" element={<Topic />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
