import React from "react";
import "./Css.css";
import BoxModel from "./components/BoxModel/BoxModel.tsx";
import Positioning from "./components/Positioning/Positioning.tsx";
const Css: React.FC = () => {
    return (
        <section className="css-container">
            <header>
                <h1>Css</h1>
            </header>
            <BoxModel />
            <Positioning />
        </section>
    );
};

export default Css;
