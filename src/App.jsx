import "./input.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Studio } from "./studioCode/studio";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Studio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
