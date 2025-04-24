import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from "./Login.jsx";
import {Signup} from "./Signup.jsx";
import {Home} from "./Home.jsx";
import {Navbar} from "./Navbar.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Navbar>

            </Navbar>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
    </BrowserRouter>)
}

export default App;