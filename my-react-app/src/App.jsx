import Albums from "./Components/Albums.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Store from "./Pages/Store.jsx";
import About from "./Pages/About.jsx";
import Navbar from "./Navbar.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

