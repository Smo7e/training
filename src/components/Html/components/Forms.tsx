import React from "react";

const Forms: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Основной тег {`<form>`}</h2>
            </header>

            <form style={{ backgroundColor: "yellow", opacity: 1, display: "block" }}>
                <h2>Input</h2>
                <p>Суем input внутри label чтобы связать</p>

                <label>
                    type="text":
                    <input type="text" id="typeTextId" placeholder="placeholder" />
                </label>
                <label>
                    type="password":
                    <input type="password" id="typePasswordId" placeholder="placeholder" defaultValue="123123" />
                </label>
                <label>
                    type="email" (проверит почта ли):
                    <input type="email" placeholder="placeholder" required />
                </label>

                <label>
                    type="number"(min, max, step):
                    <input type="number" placeholder="placeholder" />
                </label>

                <label>
                    type="tel"(Поле для ввода телефонных номеров):
                    <input type="tel" placeholder="placeholder" required />
                </label>

                <label>
                    type="date", type="time", type="datetime-local":
                    <input type="date" />
                </label>

                <label>
                    type="color":
                    <input type="color" />
                </label>

                <label>
                    type="range":
                    <input type="range" />
                </label>

                <label>
                    type="checkbox":
                    <input type="checkbox" />
                </label>

                <label>
                    type="radio":
                    <input type="radio" name="1" />
                </label>
                <label>
                    <input type="radio" name="1" />
                </label>
                <label>
                    <input type="radio" name="1" />
                </label>

                <label>
                    type="file":
                    <input type="file" accept=".jpg" />
                </label>

                <label>
                    type="hidden"
                    <input type="hidden" defaultValue="ахуеть меня нет" />
                </label>

                <label>
                    type="submit":
                    <input type="submit" />
                </label>

                <label>
                    type="reset":
                    <input type="reset" />
                </label>

                <label>
                    type="button":
                    <input type="button" value={"button"} />
                </label>
            </form>
            <hr />
        </section>
    );
};
export default Forms;
