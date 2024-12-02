import Albums from "./Components/Albums.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Store from "./Pages/Store.jsx";
import About from "./Pages/About.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ColorPicker from "./Pages/ColorPicker.jsx";
import TodoList from "./Pages/TodoList.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/color-picker" element={<ColorPicker />} />
                    <Route path="/todo-list" element={<TodoList />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;

