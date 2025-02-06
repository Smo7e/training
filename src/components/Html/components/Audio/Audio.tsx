import React from "react";

const Audio: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Элемент {`<audio>`}</h2>
            </header>
            <audio src="http://mp3uk.net/mp3/files/mukka-devochka-s-kare-remix-by-forzik-mp3.mp3" loop controls></audio>
            <p>src: (Обязательный) Указывает путь к аудиофайлу.</p>
            <p>controls: Добавляет элементы управления плеером (кнопки воспроизведения, паузы, громкости и т.д.).</p>
            <p>
                autoplay: (Необязательный) Аудио начнет воспроизводиться автоматически при загрузке страницы. (ВНИМАНИЕ:
                может быть заблокировано браузерами).
            </p>
            <p>loop: (Необязательный) Аудио будет воспроизводиться в цикле.</p>
            <p>muted: (Необязательный) Выключает звук.</p>
            <p>preload: (Необязательный) Указывает как браузер должен загружать аудио.</p>
            <p>{`<audio src='' controls loop>`}</p>
            <p>{`<source src="my_audio.mp3" type="audio/mpeg">`}</p>
            <p>{`<source src="my_audio.ogg" type="audio/ogg">`}</p>
            <p> Ваш браузер не поддерживает HTML5 аудио.</p>
            <p>{`</audio>`}</p>

            <hr />
        </section>
    );
};

export default Audio;
