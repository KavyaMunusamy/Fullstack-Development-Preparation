import Login from "./components/Login";
import Home from "./components/Home";
import Events from "./components/Events";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/events" element={<Events/>} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;