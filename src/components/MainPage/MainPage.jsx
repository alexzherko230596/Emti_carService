import React from "react";
import { Link } from "react-scroll";
import classes from './MainPage.module.scss'

const MainPage = () => {
    return(
        <section className={classes.main}>
            <div className="g-container">
                <div className={classes.main__wrapper}>
                    <h1 className={classes.main__wrapper_title}>EMTI centrum napraw samochodów<br className={classes.main__wrapper_title_br}/>w Warszawe</h1>
                    {/* <h2 className={classes.main__wrapper_descr}>Окунись в мир творчества</h2> */}
                    <button className={classes.main__wrapper_button}>
                        <Link
                                to="BlockToScrollMap"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Nasze kontakty
                            </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MainPage