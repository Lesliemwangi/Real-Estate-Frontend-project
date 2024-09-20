import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            {/* Add route for "/" */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
