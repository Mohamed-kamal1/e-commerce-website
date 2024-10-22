import './App.css'
import {Login} from "./Register/Login.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home.jsx";
import {Signup} from "./Register/Signup.jsx";
import {Cart} from "./Pages/Cart.jsx";
import {Checkout} from "./Pages/Checkout.jsx";
import {Error} from "./Pages/Error.jsx";

function App() {
    return (
        <>
            <div>
                <HashRouter>
                    <Header />
                        <Routes>
                            <Route  path="e-commerce-website/" element={<Signup />} />
                            <Route  path="e-commerce-website/Home" element={<Home />} />
                            <Route  path="e-commerce-website/login" element={<Login />} />
                            <Route  path="e-commerce-website/signup" element={<Signup />} />
                            <Route  path="e-commerce-website/cart" element={<Cart />} />
                            <Route  path="e-commerce-website/checkout" element={<Checkout />} />
                            <Route  path="*" element={<Error/>} />
                        </Routes>
                    <Footer/>
                </HashRouter>
            </div>

        </>
    )
}

export default App
