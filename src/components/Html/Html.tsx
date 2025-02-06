import React from "react";

import MainTags from "./components/MainTags/MainTags.tsx";
import TextFormatting from "./components/TextFormatting/TextFormatting.tsx";
import Lists from "./components/Lists/Lists.tsx";
import Links from "./components/Links/Links.tsx";
import Images from "./components/Images/Images.tsx";
import SemanticHtml from "./components/SemanticHtml/SemanticHtml.tsx";
import Forms from "./components/Forms/Forms.tsx";
import Table from "./components/Table/Table.tsx";
import Audio from "./components/Audio/Audio.tsx";
import Video from "./components/Video/Video.tsx";

import "./Html.css";

const Html: React.FC = () => {
    return (
        <section className={"html-container"}>
            <header>
                <h1>HTML</h1>
            </header>
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
                <h2>Используейте валидатор для проверки вашего html</h2>
                <a href="https://validator.w3.org/" target={"_blank"} rel="noreferrer">
                    Ссылка на сайт
                </a>
            </article>
        </section>
    );
};
export default Html;
