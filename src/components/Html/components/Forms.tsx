import React from "react";

const Forms: React.FC = () => {
    return (
        <section>
            <header>
                <h1>Основной тег {`<form>`}</h1>
            </header>

            <form autoComplete="true" style={{ backgroundColor: "yellow", opacity: 1, display: "block" }}>
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
                    <input type="date" placeholder="placeholder" />
                </label>

                <label>
                    type="color":
                    <input type="color" placeholder="placeholder" />
                </label>

                <label>
                    type="range":
                    <input type="range" placeholder="placeholder" />
                </label>

                <label>
                    type="checkbox":
                    <input type="checkbox" placeholder="placeholder" />
                </label>

                <label>
                    type="radio":
                    <input type="radio" name="1" placeholder="placeholder" />
                    <input type="radio" name="1" placeholder="placeholder" />
                    <input type="radio" name="1" placeholder="placeholder" />
                </label>

                <label>
                    type="file":
                    <input type="file" accept=".jpg" placeholder="placeholder" />
                </label>

                <label>
                    type="hidden"
                    <input type="hidden" placeholder="placeholder" defaultValue="ахуеть меня нет" />
                </label>

                <label>
                    type="submit":
                    <input type="submit" placeholder="placeholder" />
                </label>

                <label>
                    type="reset":
                    <input type="reset" placeholder="placeholder" />
                </label>

                <label>
                    type="button":
                    <input type="button" placeholder="placeholder" />
                </label>
            </form>
            <hr />
        </section>
    );
};
export default Forms;
