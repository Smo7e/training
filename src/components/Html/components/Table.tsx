import React from "react";

const Table: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Таблицы:</h2>
            </header>
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2}>Имя</th>
                        <th rowSpan={2}>Возраст</th>
                        <th colSpan={2}>Город</th>
                    </tr>
                    <tr>
                        <th>Страна</th>
                        <th>Регион</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Иван</td>
                        <td>25</td>
                        <td>Россия</td>
                        <td>Москва</td>
                    </tr>
                    <tr>
                        <td>Мария</td>
                        <td>30</td>
                        <td>Россия</td>
                        <td>Санкт-Петербург</td>
                    </tr>
                    <tr>
                        <td>Александр</td>
                        <td>28</td>
                        <td>Россия</td>
                        <td>Казань</td>
                    </tr>
                    <tr>
                        <td>Екатерина</td>
                        <td>32</td>
                        <td colSpan={2}>Китай</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>Итого: 4 пользователя</td>
                    </tr>
                </tfoot>
            </table>
            {/* prettier-ignore */}
            <section>
                <h3>Атрибуты</h3>
                <p>&lt;table&gt;: Контейнер для всей таблицы.</p>
                <p>&lt;thead&gt;: Заголовочная часть таблицы (содержит заголовки столбцов).</p>
                <p>&lt;tbody&gt;: Основное тело таблицы (с данными).</p>
                <p>&lt;tfoot&gt;: Подвал таблицы (обычно содержит итоговую информацию).</p>
                <p>&lt;tr&gt;: Строка таблицы.</p>
                <p>&lt;th&gt;: Ячейка заголовка.</p>
                <p>&lt;td&gt;: Ячейка с данными.</p>
                <p>{`<td colSpan={4}>Обьединение 4 столбца(надо чтобы было 4 столбца)</td>`}</p>
                <p>{`<td rowSpan={2}>Обьединение 2 ряда (надо чтобы было 2 ряда)</td>`}</p>
                </section>

            <hr />
        </section>
    );
};

export default Table;
