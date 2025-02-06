import React from "react";

const TextFormatting: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Форматирование текста:</h2>
            </header>
            <p>
                <strong>Жирный текст b или strong</strong>
            </p>
            <p>
                <em>Курсивный текст em или i</em>
            </p>
            <p>
                <u>Подчеркнутый текст u</u>
            </p>
            <p>
                <del>Зачеркнутый текст del или s</del>
            </p>
            <p>
                <mark>Выделенный текст mark</mark>
            </p>
            <hr />
        </section>
    );
};

export default TextFormatting;
