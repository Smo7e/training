import React from "react";

const Lists: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Списки:</h2>
            </header>
            <h3>1.Нумерованные списки {`(<ol> и <li>)`}:</h3>
            <p>Теги li внутри тега ol</p>
            <p>ol c атрибутом start=1 и reversed</p>
            <ol start={1} reversed>
                <li></li>
                <li></li>
                <li></li>

                <li value="10"> Указал value="10" и список пошел по новой с 10</li>
                <li></li>
            </ol>
            <h3>2. Маркированные списки {`(<ul> и <li>)`}:</h3>
            <ul>
                <li>Нету атрибутов</li>
                <li></li>
            </ul>
            <h3>3. Списки определений {`(<dl>, <dt> и <dd>)`}:</h3>
            <p>Теги dt и dd внутри dl</p>
            <p>dt указывает на то, что это термин.</p>
            <p>dd указывает на то, что это определение.</p>
            <p>
                Эти теги нужны чтобы код более читаемым и понятным для браузеров, поисковых систем и других
                разработчиков.
            </p>

            <dl>
                <dt>(dt)Описание 1</dt>
                <dd>(dd)Определение 1</dd>
                <dt>(dt)Описание 2</dt>
                <dd>(dd)Определение 2</dd>
            </dl>
            <hr />
        </section>
    );
};

export default Lists;
