
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import About from "./components/About";
// import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="Text-Utils" />
        <hr />
        <Textform heading="Enter the text to analyze" />
      {/* <Routes> */}
        
       {/* <Route exact path="/" element={} />
        <Route exact path="/about" element={<About />} />
        <Route  exact path="/login" element={<Login />} />





      </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
