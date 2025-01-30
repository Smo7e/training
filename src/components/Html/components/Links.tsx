import React from "react";

const Links: React.FC = () => {
    return (
        <section>
            <header>
                <h1>Ссылки (гиперссылки) - тег {`<a>`}</h1>
            </header>
            <a href="https://www.example.com" target="_blank" rel={"noopener noreferrer"} title="Перейти на сайт Example">
                Сайт Example
            </a>
            <h3>Атрибуты</h3>
            <ul>
                <li>href (Обязательный, указывает URL-адрес)</li>
                <li>target (Указывает, где открывать ссылку)</li>
                <li>title (Добавляет всплывающую подсказку при наведении курсора на ссылку.)</li>
                <li>rel (Задает отношение между текущим документом и ссылочным ресурсом)</li>
                <li>download (Указывает, что браузер должен скачать файл, а не переходить на него.)</li>
            </ul>
            <hr />
        </section>
    );
};

export default Links;
