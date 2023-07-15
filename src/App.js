import "./App.css";
import { Routes, Route } from "react-router-dom";
import SubTitlePage1 from "./pages/SubTitlePage1";
import SubTitlePage2 from "./pages/SubTitlePage2";
import SubTitlePage3 from "./pages/SubTitlePage3";
import SubTitlePage4 from "./pages/SubTitlePage4";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SubTitlePage1 />} />
        <Route path="/sub2" element={<SubTitlePage2 />} />
        <Route path="/sub3" element={<SubTitlePage3 />} />
        <Route path="/sub4" element={<SubTitlePage4 />} />
      </Routes>
    </div>
  );
}

export default App;
