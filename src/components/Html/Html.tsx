import React from "react";

import MainTags from "./components/MainTags.tsx";
import TextFormatting from "./components/TextFormatting.tsx";
import Lists from "./components/Lists.tsx";
import Links from "./components/Links.tsx";

import "./Html.css";
import Images from "./components/Images.tsx";
import SemanticHtml from "./components/SemanticHtml.tsx";
import Forms from "./components/Forms.tsx";
const Html: React.FC = () => {
    return (
        <section className={"html-container"}>
            <MainTags />
            <TextFormatting />
            <Lists />
            <Links />
            <Images />
            <SemanticHtml />
            <Forms />
        </section>
    );
};
export default Html;
