import React from "react";
import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import Html from "./components/Html/Html.tsx";
import Css from "./components/Css/Css.tsx";

function App() {
    return (
        <HashRouter>
            <header className={"main-header"}>
                <span>Это типо header (кнопки тоже)</span>
                <nav className={"main-nav"}>
                    <Link className={"main-link"} to="/">
                        Главная
                    </Link>
                    <Link className={"main-link"} to="/html">
                        Изучение HTML
                    </Link>
                    <Link className={"main-link"} to="/css">
                        Изучение CSS
                    </Link>
                </nav>
            </header>
            <main className="main-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/html" element={<Html />} />
                    <Route path="/css" element={<Css />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer className={"main-footer"}>Это типо footer </footer>
        </HashRouter>
    );
}

export default App;
