import React from "react";

const Js: React.FC = () => {
    const obj = {
        a: 10,
        b: 20,
        func() {
            (() => console.log(this))();
        },
    };
    obj.func();
    return (
        <section>
            <code>result = value1 || value2 || value3;</code>
            <p>
                Оператор <code>||</code> ищет первый не ложный операнд и возвращает его:
            </p>

            <hr />
            <code>a ||= b;</code>
            <p>
                Оператор <code>||=</code> принимает два операнда и выполняет следующие действия:
            </p>
            <ul>
                <li>Вычисляет операнды слева направо.</li>
                <li>
                    Конвертирует <code>a</code> в логическое значение.
                </li>
                <li>
                    Если <code>a</code> ложно, присваивает <code>a</code> значение <code>b</code>.
                </li>
            </ul>
            <hr />
            <code>result = value1 && value2 && value3;</code>
            <p>Оператор && ищет первый ложный операнд и возвращает его, если ложных нет возвращает последний</p>

            <hr />
            <code>a &&|= b;</code>
            <p>
                Принцип действия <code>&amp;&amp;=</code> практически такой же, как и у оператора логического
                присваивания ИЛИ <code>||=</code>. Единственное отличие заключается в том, что <code>&amp;&amp;=</code>{" "}
                присвоит <code>a</code> значение <code>b</code> только в том случае, если <code>a</code>{" "}
                <em>истинно</em>.
            </p>
            <hr />

            <code>result = a ?? b</code>
            <p>
                оператор <code>??</code> возвращает первый аргумент, если он не <code>null/undefined</code>
            </p>
            <hr />

            <code>x ??= y</code>
            <p>
                Оператор <code>??=</code> присвоит <code>x</code> значение <code>y</code> только в том случае, если{" "}
                <code>x</code> <em>не определено</em> (<code>null</code>/<code>undefined</code>).
            </p>

            <h3>
                Метки для <code>break/continue </code>
            </h3>
            <code>labelName: for (...)&#123;...&#125;</code>
            <p>
                Вызов <code>break &lt;labelName&gt;</code> в цикле ниже ищет ближайший внешний цикл с такой меткой и
                переходит в его конец.
            </p>
            <hr />

            <h3>
                Группировка <code>case</code>
            </h3>
            <p>группируем оба case:</p>
            <code>case 3: case 5 </code>
            <p>
                (нету <code>break</code> или <code>return</code>)
            </p>

            <h3>Обьекты</h3>
            <p>Удаление ключа:</p>
            <code>delete object.key</code>
            <hr />
            <code>let fruit = 'apple'; key[fruit + 'Computers']: 5 // bag.appleComputers = 5</code>
            <br />

            <code>"key" in object</code>
            <p>
                Cпециальный оператор <code>in</code> для проверки существования свойства в объекте. Возвращает boolean
            </p>

            <code>Object.assign(dest, [src1, src2, src3...])</code>
            <p>Копирование обьекта(все свойства в обьект dest)</p>
            <code>cloneObj = &#123;...obj&#125;</code>
        </section>
    );
};
export default Js;
