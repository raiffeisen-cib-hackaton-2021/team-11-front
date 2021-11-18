import { Routes, Route } from "react-router-dom";
import { NavBar } from "shared/ui/NavBar/NavBar";
import { Sidebar } from "shared/ui/Sidebar/Sidebar";
import { MainPage } from "pages";
import { Topic } from "pages/topics/topic";
import { FeedbackLabel } from "./features/FeedbackLabel/FeedbackLabel";

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
        <FeedbackLabel />
      </main>
    </div>
  );
}

export default App;
