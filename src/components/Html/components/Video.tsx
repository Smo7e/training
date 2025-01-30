import React from "react";

const Video: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Элемент {`<video>`}</h2>
            </header>
            <p>
                у тега video все такие же атрибуты + новый атрибут poster указывает путь к изображению, которое будет
                показано до начала воспроизведения видео.
            </p>
            <figure>
                <video
                    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                    controls
                    width="640"
                    poster="https://yandex-images.clstorage.net/iKd560C87/911a98Jseryb/KULBGnJyYVuhZ_Y8ya1faxZAcQ07gr_doYAo24eilJUUTW2QJ8V8lnIYfskHTZBA2gFe3x0tgB3bWCMSTd-Ibl1n9R-WAmEK5ddS_WlsXj_XlEBZGhL_qDFAW2115abmptvfF0UyHUY3nX6NhpyRdgylTNoardQb3gtDRZn6PRkYQuIoJxDSuGfU940prS6c1iBT2KsFv_2GpwittpTmRcSKH8RHs_5UVf4d76FewGTMwk2Liw_1-l7Y4FX6uC8ZmSKRawZzsGjHBhWNGu59vSUzIyqbtxzN1BYp3vVm18U22X8153J-ZgcePIywLXIW7GPfi9oNxjidCHE1Cisv2_jioSlmUPIJNVUWH1hMbU_n4MCpi8RcLYT3ee3l58X1txjspwbijYdEbL7-wV6DFU4z_agpbyeK3iiRVoh6PNurQcFoBTLjyPbVJRzI7p5-xNASuGl0bw7WFZoMR9b2Nmc7XpcU8b30dV-sXLFfUQadsVy6OX6XCT4roufImby7CDDBGdXiUVoH9AVNW8yurPfCorhZ1d2O1RfJH6Vl5rRWO1_nB7HftuctD30CTCAXH7ONqNkt5hhtWVOGCjvfKRjigTo18jNKpZc0DgptzA_m8SLqa9QeLvTWecw1tqR21bvvdEexv_YX7i-NIs6hh-8wHMorn-UKLPtDxkqb_QiokVJJJxKRCGf39BwL3ezMhGEyqtv1vkzXRXpvlyXlpaboHzdk4E4nFH-crtMPclSMYFwqeE30Gy67sqYYmu5YGYIRaMey8Xp1JnS9K3w_jaWRs0hItS9_VwcrPxSVF1eXqH1FdoDONXQ8XC1wz9EUnGJcydivdEu-uEE22Lo9mroig0gWoTA7FycEvzp_PW7mMECLa9VtLJb3C4z1FXfXxuvtZbcz71V0fiweYd0wt7-x7nkLTOS4_wkARPgZrJoK8gAYBvPhOPcFFz5L3i6s1OMQmmg3DN_FRxve4"
                ></video>
                <iframe
                    title="na koleni"
                    src="https://vk.com/video_ext.php?oid=-220858537&id=456241512&hd=2&autoplay=1"
                    width="325"
                    height="646"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                ></iframe>
                <figcaption hidden>примеры видосов</figcaption>
            </figure>

            <hr />
        </section>
    );
};

export default Video;
