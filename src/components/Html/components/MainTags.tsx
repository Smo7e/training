import React from "react";

const MainTags: React.FC = () => {
    return (
        <section>
            <header>
                <h1>Основные теги:</h1>
            </header>

            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>p</p>
            <span>Тест без css span</span>
            <br />
            <p>
                Тут стоит br <br /> перенос
            </p>
            <p>Черта ниже: hr</p>
            <hr />
        </section>
    );
};

export default MainTags;
