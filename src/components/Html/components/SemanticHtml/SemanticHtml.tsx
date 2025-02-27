import React from "react";

const SemanticHtml: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Cемантические теги:</h2>
            </header>
            <figure>
                <img
                    src="https://i.pinimg.com/736x/3c/97/55/3c97554e2fd567c875ba1de854350e7e.jpg"
                    alt="Семантические элементы HTML5"
                    width="300"
                />
                <figcaption>Картинка Семантических элементов HTML5</figcaption>
            </figure>
            <h3>header</h3>
            <p>Определяет заголовок для раздела или страницы.</p>
            <h3>nav</h3>
            <p>Определяет навигацию по сайту.</p>
            <h3>section</h3>
            <p>Определяет раздел документа.</p>
            <h3>article</h3>
            <p>Определяет независимое содержание.</p>
            <h3>aside</h3>
            <p>Определяет содержание, которое не является основным содержанием страницы.</p>
            <h3>footer</h3>
            <p>Определяет подвал для раздела или страницы.</p>
            <h3>details</h3>
            <p>Определяет дополнительную информацию, которую пользователь может открывать или закрывать</p>
            <h3>summary</h3>
            <p> Определяет видимый заголовок элемента details</p>
            <details>
                <summary>Пример</summary>
                The picture frame is available in its natural wood color, or with black stain.
            </details>
            <h3>figure</h3>
            <p>Определяет самостоятельное содержание, такое как иллюстрации, диаграммы, фотографии, код и т.д.</p>
            <h3>figcaption</h3>
            <p>Определяет подпись для элемента figure.</p>
            <h3>time</h3>
            <p>Определяет дату/время.</p>
            <h3>q/ blockquote</h3>
            <p>Определяет цитаты. q для коротких,однострочных.</p>
            <h3>code</h3>
            <p>Определяет фрагмент кода.</p>
            <hr />
        </section>
    );
};

export default SemanticHtml;
