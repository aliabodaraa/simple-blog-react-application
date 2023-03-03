
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Create from './Create';
import Timer from "./Timer";
import { useState } from "react";
function App() {
  const [display, toggleDisplay] = useState(false);

  const handleToggleDisplay = () => {
    toggleDisplay(!display);
  };
  return (
      <div className="App">
          <BrowserRouter>
            <div className="timer">
              <button onClick={handleToggleDisplay}>
                {display ? "hidden" : "visible"}
              </button>
              {display && <Timer />}
            </div>
            <Navbar/>
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
              </Routes>
            </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
