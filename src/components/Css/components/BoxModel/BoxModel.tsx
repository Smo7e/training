import React from "react";

import "./BoxModel.css";
const BoxModel: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Box Model</h2>
            </header>
            <ul>
                <li>
                    <strong>
                        <code>content</code> (содержимое):
                    </strong>
                    <ul>
                        <li>Это фактическое содержимое элемента: текст, изображения, видео и т.д.</li>
                        <li>
                            Размер контента определяется его размерами (например, размер текста, размер изображения) или
                            заданными значениями <code>width</code> и <code>height</code>.
                        </li>
                        <li>
                            Если не заданы <code>width</code> и <code>height</code>, то размеры <code>content</code>{" "}
                            определяются размерами содержимого.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>padding</code> (внутренний отступ):
                    </strong>
                    <ul>
                        <li>
                            Пространство между <code>content</code> и <code>border</code>.
                        </li>
                        <li>
                            Может быть задан для каждой стороны индивидуально (<code>padding-top</code>,{" "}
                            <code>padding-right</code>, <code>padding-bottom</code>, <code>padding-left</code>) или все
                            сразу (<code>padding</code>).
                        </li>
                        <li>
                            <code>padding</code> входит в размеры элемента.
                        </li>
                        <li>
                            <code>padding</code> имеет тот же цвет фона, что и элемент, на который он применен.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>border</code> (граница):
                    </strong>
                    <ul>
                        <li>
                            Линия, окружающая <code>padding</code> (и <code>content</code>).
                        </li>
                        <li>
                            Имеет свой цвет, стиль и толщину (<code>border-width</code>, <code>border-style</code>,{" "}
                            <code>border-color</code>).
                        </li>
                        <li>
                            Может быть задан для каждой стороны (<code>border-top</code>, <code>border-right</code>,{" "}
                            <code>border-bottom</code>, <code>border-left</code>) или все сразу (<code>border</code>).
                        </li>
                        <li>
                            <code>border</code> входит в размеры элемента.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>margin</code> (внешний отступ):
                    </strong>
                    <ul>
                        <li>
                            Пространство за пределами <code>border</code>, отделяющее элемент от других элементов.
                        </li>
                        <li>
                            Может быть задан для каждой стороны (<code>margin-top</code>, <code>margin-right</code>,{" "}
                            <code>margin-bottom</code>, <code>margin-left</code>) или все сразу (<code>margin</code>).
                        </li>
                        <li>
                            <code>margin</code> <em>не</em> входит в размеры элемента.
                        </li>
                        <li>
                            <code>margin</code> может схлопываться (collapse), когда два соседних блока имеют{" "}
                            <code>margin</code>, тогда меньшее значение игнорируется.
                        </li>
                    </ul>
                </li>
            </ul>
            <div style={{ display: "grid", justifyContent: "center" }}>
                <div>Пустой текст</div>
                <div className="css-padding">padding: 5px 10px 15px 20px (начинается с верхней и по часовой)</div>
                <div className="css-margin">margin: 5px 10px 15px 20px (начинается с верхней и по часовой)</div>

                <div className="css-border" style={{ borderStyle: "solid" }}>
                    <code>border: 5px solid red;</code>
                    (сплошная линия)
                </div>
                <div className="css-border" style={{ borderStyle: "dotted" }}>
                    <code>border: 5px dotted red;</code>
                    (граница, состоящая из точек)
                </div>
                <div className="css-border" style={{ borderStyle: "dashed" }}>
                    <code>border: 5px dashed red;</code>
                    (граница со штрихами)
                </div>
                <div className="css-border" style={{ borderStyle: "double" }}>
                    <code>border: 5px double red;</code>
                    (две параллельные линии)
                </div>
                <div className="css-border" style={{ borderStyle: "groove" }}>
                    <code>border: 5px groove red;</code>
                    (граница с трёхмерным эффектом вдавливания)
                </div>
                <div className="css-border" style={{ borderStyle: "ridge" }}>
                    <code>border: 5px ridge red;</code>
                    (линия с 3D-эффектом выпуклости)
                </div>
                <div className="css-border" style={{ borderStyle: "inset" }}>
                    <code>border: 5px inset red;</code>
                    (весь блок кажется вдавленным в страницу)
                </div>
                <div className="css-border" style={{ borderStyle: "outset" }}>
                    <code>border: 5px outset red;</code>
                    (создаёт эффект выпуклости всего блока)
                </div>
            </div>
            <h3>box-sizing</h3>
            <ul>
                <li>
                    <strong>
                        <code>box-sizing: content-box</code> (значение по умолчанию):
                    </strong>
                    <ul>
                        <li>
                            <code>width</code> и <code>height</code> определяют только размеры <code>content</code>.
                        </li>
                        <li>
                            <code>padding</code> и <code>border</code> добавляются к этим размерам.
                        </li>
                        <li>
                            При изменении <code>padding</code> и <code>border</code> меняются полные размеры элемента,
                            что может привести к изменению общего макета.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>
                        <code>box-sizing: border-box</code>:
                    </strong>
                    <ul>
                        <li>
                            <code>width</code> и <code>height</code> определяют полные размеры элемента, включая{" "}
                            <code>padding</code> и <code>border</code>.
                        </li>
                        <li>
                            Если увеличить <code>padding</code> или <code>border</code>, то <code>content</code>{" "}
                            уменьшится, сохраняя общий размер элемента.
                        </li>
                        <li>
                            Гораздо более интуитивно понятный подход, особенно когда нужно контролировать размеры
                            элементов.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                <code>padding:10px; margin:20px; border: 5px solid blueviolet;</code>
            </p>
            <div className="css-box-sizing">
                <code>box-sizing: content-box;</code>
            </div>
            <div className="css-box-sizing" style={{ boxSizing: "border-box" }}>
                <code>box-sizing: border-box;</code>
            </div>
            <hr />
        </section>
    );
};

export default BoxModel;
