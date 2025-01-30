import React from "react";

import MainTags from "./components/MainTags.tsx";
import TextFormatting from "./components/TextFormatting.tsx";
import Lists from "./components/Lists.tsx";
import Links from "./components/Links.tsx";
import Images from "./components/Images.tsx";
import SemanticHtml from "./components/SemanticHtml.tsx";
import Forms from "./components/Forms.tsx";
import Table from "./components/Table.tsx";
import Audio from "./components/Audio.tsx";
import Video from "./components/Video.tsx";

import "./Html.css";

const Html: React.FC = () => {
    return (
        <section className={"html-container"}>
            <h1>HTML</h1>
            <MainTags />
            <TextFormatting />
            <Lists />
            <Links />
            <Images />
            <SemanticHtml />
            <Forms />
            <Table />
            <Audio />
            <Video />

            <article>
                <h2>Используейте ссылку для проверки вашего html</h2>
                <a href="https://validator.w3.org/" target={"_blank"} rel="noreferrer">
                    Ссылка на сайт
                </a>{" "}
            </article>
        </section>
    );
};
export default Html;
