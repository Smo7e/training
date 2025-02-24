import React from "react";

const MapSet: React.FC = () => {
    return (
        <section>
            <h3>
                <code>Map(WeakMap)/Set(WeakSet)</code>
            </h3>
            <p>
                <code>Map</code> – коллекция пар ключ-значение.
            </p>
            <p>Методы и свойства:</p>
            <ul>
                <li>
                    <code>new Map([iterable])</code> – создаёт коллекцию, можно указать перебираемый объект (обычно
                    массив) из пар <code>[ключ,значение]</code> для инициализации.
                </li>
                <li>
                    <code>map.set(key, value)</code>– записывает по ключу <code>key</code> значение <code>value</code>.
                </li>
                <li>
                    <code>map.get(key)</code>– возвращает значение по ключу или <code>undefined</code>, если ключ{" "}
                    <code>key</code> отсутствует.
                </li>
                <li>
                    <code>map.has(key)</code>– возвращает <code>true</code>, если ключ <code>key</code> присутствует в
                    коллекции, иначе <code>false</code>.
                </li>
                <li>
                    <code>map.delete(key)</code>– удаляет элемент по ключу <code>key</code>.
                </li>
                <li>
                    <code>map.clear()</code>– очищает коллекцию от всех элементов.
                </li>
                <li>
                    <code>map.size</code>– возвращает текущее количество элементов.
                </li>
            </ul>
            <p>
                Отличия от обычного объекта <code>Object</code>:
            </p>
            <ul>
                <li>Что угодно может быть ключом, в том числе и объекты.</li>
                <li>
                    Есть дополнительные методы, свойство <code>size</code>.
                </li>
            </ul>
            <p>
                <code>Set</code>– коллекция уникальных значений, так называемое «множество».
            </p>
            <p>Методы и свойства:</p>
            <ul>
                <li>
                    <code>new Set(iterable)</code>– создаёт <code>Set</code>, можно указать перебираемый объект со
                    значениями для инициализации.
                </li>
                <li>
                    <code>set.add(value)</code>– добавляет значение (если оно уже есть, то ничего не делает), возвращает
                    тот же объект <code>set</code>.
                </li>
                <li>
                    <code>set.delete(value)</code>– удаляет значение, возвращает <code>true</code> если{" "}
                    <code>value</code> было в множестве на момент вызова, иначе <code>false</code>.
                </li>
                <li>
                    <code>set.has(value)</code>– возвращает <code>true</code>, если значение присутствует в множестве,
                    иначе <code>false</code>.
                </li>
                <li>
                    <code>set.clear()</code>– удаляет все имеющиеся значения.
                </li>
                <li>
                    <code>set.size</code>– возвращает количество элементов в множестве.
                </li>
            </ul>
            <p>
                Перебор <code>Map</code> и <code>Set</code> всегда осуществляется в порядке добавления элементов, так
                что нельзя сказать, что это – неупорядоченные коллекции, но поменять порядок элементов или получить
                элемент напрямую по его номеру нельзя.
            </p>

            <p>
                <code>WeakMap</code> – это <code>Map</code>-подобная коллекция, позволяющая использовать в качестве
                ключей только объекты, и автоматически удаляющая их вместе с соответствующими значениями, как только они
                становятся недостижимыми иными путями.
            </p>
            <p>
                <code>WeakSet</code> – это <code>Set</code>-подобная коллекция, которая хранит только объекты и удаляет
                их, как только они становятся недостижимыми иными путями.
            </p>
            <p>
                Обе этих структуры данных не поддерживают методы и свойства, работающие со всем содержимым сразу или
                возвращающие информацию о размере коллекции. Возможны только операции на отдельном элементе коллекции.
            </p>
            <p>
                <code>WeakMap</code> и <code>WeakSet</code> используются как вспомогательные структуры данных в
                дополнение к «основному» месту хранения объекта. Если объект удаляется из основного хранилища и нигде не
                используется, кроме как в качестве ключа в <code>WeakMap</code> или в <code>WeakSet</code>, то он будет
                удалён автоматически.
            </p>
            <hr />
        </section>
    );
};
export default MapSet;
