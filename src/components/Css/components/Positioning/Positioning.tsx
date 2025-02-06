import React from "react";
import "./Positioning.css";

const Positioning: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Position</h2>
            </header>
            <iframe
                className="interactive is-default-height"
                height="400"
                width="1000"
                src="https://interactive-examples.mdn.mozilla.net/pages/css/position.html"
                title="MDN Web Docs Interactive Example"
                allow="clipboard-write"
                loading="lazy"
                data-readystate="complete"
            ></iframe>
            <ul>
                <li>
                    <strong>
                        <code>position: static</code> (по умолчанию):
                    </strong>
                    <ul>
                        <li>Элемент отображается в обычном порядке потока документа.</li>
                        <li>
                            Свойства <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> не
                            влияют на положение элемента.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>position: relative</code>:
                    </strong>
                    <ul>
                        <li>Элемент позиционируется относительно своего нормального положения в потоке.</li>
                        <li>
                            Свойства <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>{" "}
                            сдвигают элемент <em>относительно</em> его исходной позиции.
                        </li>
                        <li>Элемент по-прежнему занимает место в обычном потоке, но выглядит смещенным.</li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>position: absolute</code>:
                    </strong>
                    <ul>
                        <li>Элемент выводится из нормального потока.</li>
                        <li>
                            Позиционируется относительно ближайшего позиционированного (не <code>static</code>)
                            родителя.
                        </li>
                        <li>
                            Если нет позиционированного родителя, позиционируется относительно начального блока (обычно
                            это <code>&lt;html&gt;</code>).
                        </li>
                        <li>
                            Свойства <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>{" "}
                            определяют положение.
                        </li>
                        <li>Элементы могут перекрывать друг друга.</li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>position: fixed</code>:
                    </strong>
                    <ul>
                        <li>Элемент выводится из нормального потока.</li>
                        <li>Позиционируется относительно окна браузера (viewport).</li>
                        <li>Остается на одном месте даже при прокрутке страницы.</li>
                        <li>
                            Свойства <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>{" "}
                            определяют положение.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>position: sticky</code>:
                    </strong>
                    <ul>
                        <li>
                            Элемент ведет себя как <code>relative</code>, пока не достигнет заданного положения
                            (например, верхнего края окна), после чего становится <code>fixed</code>.
                        </li>
                        <li>
                            Свойства <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>{" "}
                            управляют “точкой залипания”.
                        </li>
                        <li>
                            Для <code>position: sticky</code> нужен родительский элемент, у которого не установлено{" "}
                            <code>overflow: hidden</code> или <code>overflow: scroll</code>.
                        </li>
                    </ul>
                </li>
            </ul>
            <hr />
        </section>
    );
};

export default Positioning;
