import { Routes, Route } from "react-router-dom";
import { NavBar } from "./features/NavBar/NavBar";
import { MainPage } from "./pages";
import { Sidepanel } from "./features/Sidepanel/Sidepanel";
import {TopicPage} from './features/TopicPage/TopicPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidepanel />
      <main className="content">
        <Routes>
          <Route path="/" exact element={<MainPage />} />
            <Route path="/topics" exact element={<TopicPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
