import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import PetAdoption from "./components/PetAdoption";
import Jobportal from "./components/Jobportal";
import {Route, Routes } from "react-router-dom";
function App() {
  return (

      <Routes>
        <Route exact path="/" element={[<Navbar />, <Header />,<About />, <Project />, <Contact />]}></Route>
        <Route path="/Pet-Adoption" element={[<Navbar />,<PetAdoption />]}></Route>
        <Route path="/jobportal" element={[<Navbar />,<Jobportal />]}></Route>

      </Routes>

  );
}

export default App;
