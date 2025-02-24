import React from "react";

const ArrayC: React.FC = () => {
    return (
        <section>
            <h3>Array</h3>
            <ul>
                <li>
                    <p>Для добавления/удаления элементов:</p>
                    <ul>
                        <li>
                            <code>push(...items)</code> – добавляет элементы в конец,
                        </li>
                        <li>
                            <code>pop()</code> – извлекает элемент с конца,
                        </li>
                        <li>
                            <code>shift()</code> – извлекает элемент с начала,
                        </li>
                        <li>
                            <code>unshift(...items)</code> – добавляет элементы в начало.
                        </li>
                        <li>
                            <code>splice(pos, deleteCount, ...items)</code> – начиная с индекса <code>pos</code> удаляет{" "}
                            <code>deleteCount</code> элементов и вставляет <code>items</code>.
                        </li>
                        <li>
                            <code>slice(start, end)</code> – создаёт новый массив, копируя в него элементы с индекса{" "}
                            <code>start</code> до <code>end</code> (не включая <code>end</code>).
                        </li>
                        <li>
                            <code>concat(...items)</code> – возвращает новый массив: копирует все члены текущего массива
                            и добавляет к нему <code>items</code>. Если какой-то из <code>items</code> является
                            массивом, тогда берутся его элементы.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Для поиска среди элементов:</p>
                    <ul>
                        <li>
                            <code>indexOf/lastIndexOf(item, pos)</code> – ищет <code>item</code>, начиная с позиции{" "}
                            <code>pos</code>, и возвращает его индекс или <code>-1</code>, если ничего не найдено.
                        </li>
                        <li>
                            <code>includes(value)</code> – возвращает <code>true</code>, если в массиве имеется элемент{" "}
                            <code>value</code>, в противном случае <code>false</code>.
                        </li>
                        <li>
                            <code>find/filter(func)</code> – фильтрует элементы через функцию и отдаёт первое/все
                            значения, при прохождении которых через функцию возвращается <code>true</code>.
                        </li>
                        <li>
                            <code>findIndex</code> похож на <code>find</code>, но возвращает индекс вместо значения.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Для перебора элементов:</p>
                    <ul>
                        <li>
                            <code>forEach(func)</code> – вызывает <code>func</code> для каждого элемента. Ничего не
                            возвращает.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Для преобразования массива:</p>
                    <ul>
                        <li>
                            <code>map(func)</code> – создаёт новый массив из результатов вызова <code>func</code> для
                            каждого элемента.
                        </li>
                        <li>
                            <code>sort(func)</code> – сортирует массив «на месте», а потом возвращает его.
                        </li>
                        <li>
                            <code>reverse()</code> – «на месте» меняет порядок следования элементов на противоположный и
                            возвращает изменённый массив.
                        </li>
                        <li>
                            <code>split/join</code> – преобразует строку в массив и обратно.
                        </li>
                        <li>
                            <code>reduce/reduceRight(func, initial)</code> – вычисляет одно значение на основе всего
                            массива, вызывая <code>func</code> для каждого элемента и передавая промежуточный результат
                            между вызовами.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Дополнительно:</p>
                    <ul>
                        <li>
                            <code>Array.isArray(arr)</code> проверяет, является ли <code>arr</code> массивом.
                        </li>
                    </ul>
                </li>
            </ul>
            <hr />
        </section>
    );
};
export default ArrayC;
