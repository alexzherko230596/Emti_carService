import React from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './AboutStudio.module.scss'
import studio1 from '../../img/car_main.png'
import studio2 from '../../img/car_main.png'
import bg from '../../img/bigBackgroundMusic.svg'
import music from '../../img/music.svg'
import theater from '../../img/theater.svg'
import time from '../../img/time.svg'

const AboutStudio = () => {
    return(
        <section className={classes.studio} id = 'BlockToScrollAboutStudio'>
            <div className="g-container">
                <TitleBlock title = {'O nas'}/>
                <div className={classes.studio__wrapper}>
                    <img src = {studio1} alt='Studio Romani' className={classes.studio__wrapper_img}/>
                    <article className={classes.studio__wrapper__text}>
                        <p ><span>Serwis samochodowy Emti to niezawodność</span></p> 
                        <p >Gwarantujemy wysoki efekt naszej naprawy. Z dumą pokażemy Ci wykonaną pracę, zwrócimy Ci wymienione części. A nasza gwarancja na usługi i części zamienne wynosi do 1 roku lub 20 000 km. bieganie da ci spokój. Jesteśmy odpowiedzialni za te, które zostały naprawione</p>
                        <p >Nie dopuszczamy kolejek. W tym celu naprawy i konserwacja są przeprowadzane po wcześniejszym umówieniu. Jeśli cenisz sobie szybkość i jakość obsługi, to znajdziemy z Tobą wspólny język i będziemy w stanie dojść do porozumienia.</p>
                    </article>
                    <article className={classes.studio__wrapper__textSecondBlock}>
                        <img src = {studio2} alt='Studio Romani' className={classes.studio__wrapper__textSecondBlock_img}/>
                        <div className={classes.studio__wrapper__textSecondBlock_text}>
                            <p>Eksperci jakościowo wykonają wszystkie prace i będą w stanie wyjaśnić każdy etap naprawy lub diagnostyki Twojego samochodu. Jak nikt inny rozumiemy, że wysoka jakość pracy ma swoją cenę. </p> 
                            <p>Osobiście monitorujesz postępy diagnostyki i naprawy swojego samochodu - stacja wyposażona jest w kamery monitoringu</p>
                            <p><span>Emti</span> - najlepszy serwis samochodowy w Warszawie</p>
                        </div>
                    </article>
                    <div className={classes.studio__wrapper__background}>
                        <img src = {bg} alt='background' className={classes.studio__wrapper__background_img}/>
                    </div>
                    <div className={classes.studio__wrapper__advantages}>
                        <div className={classes.studio__wrapper__advantages__block}>
                            <div className={classes.studio__wrapper__advantages__block__imageForm}>
                                <img src = {music} alt='music' className={classes.studio__wrapper__advantages__block__imageForm_img}/>
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_text}>
                                Indywidualne podejście do każdego klienta
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_textMobile}>
                                Indywidualne podejście do każdego klienta
                            </div>
                        </div>

                        <div className={classes.studio__wrapper__advantages__block}>
                            <div className={classes.studio__wrapper__advantages__block__imageForm}>
                                <img src = {theater} alt='music' className={classes.studio__wrapper__advantages__block__imageForm_img}/>
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_text}>
                                Obsługujemy ponad 3500 samochodów
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_textMobile}>
                                Obsługujemy ponad 3500 samochodów
                            </div>
                        </div>

                        <div className={classes.studio__wrapper__advantages__block}>
                            <div className={classes.studio__wrapper__advantages__block__imageForm}>
                                <img src = {time} alt='music' className={classes.studio__wrapper__advantages__block__imageForm_img}/>
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_text}>
                                Czynne: poniedziałek - sobota od 8:00 do 20:00
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_textMobile}>
                                Czynne: poniedziałek - sobota od 8:00 do 20:00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutStudio