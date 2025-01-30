import React from "react";

const Images: React.FC = () => {
    return (
        <section>
            <header>
                <h1>Изображения - тег {`<img>`}</h1>
            </header>
            <figure>
                <img
                    width="300"
                    src="https://user-images.githubusercontent.com/131547083/234182208-0ebdd2ed-8ef8-4060-94e9-a0865cfa5696.jpg"
                    alt="Адаптивное изображение"
                />
                <figcaption>Милый котик</figcaption>
            </figure>

            <p>Форматы изображений (JPEG, PNG, GIF, SVG).</p>
            <h3>Атрибуты</h3>
            <ul>
                <li>src (Обязательный, указывает URL-адрес)</li>
                <li>alt (Обязательный, показывает текст когда картинка не прогрузилась)</li>
                <li>width, height (Задают ширину и высоту изображения в пикселях)</li>
                <li>loading (Управляет загрузкой изображения)</li>
            </ul>
            <hr />
        </section>
    );
};

export default Images;
