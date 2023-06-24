import React from "react";
import classes from './Photo.module.scss'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TitleBlock from "../TitleBlock/TitleBlock";
import img1 from '../../img/car_main.png'

const Photo = () => {
    return(
        <section className={classes.photo}>
            <div className="g-container">
                <TitleBlock title = {'Zdjęcie'}/>
                <div className={classes.photo__wrapper}>
                    <Carousel className={classes.home__photoBlock__wrapper__slider}>
                        <div>
                            <img src={img1} alt="car 1"/>
                        </div>
                        <div>
                            <img src={img1} alt="car 1"/>
                        </div>
                        <div>
                            <img src={img1} alt="car 1"/>
                        </div>
                        <div>
                            <img src={img1} alt="car 1"/>
                        </div>
                        <div>
                            <img src={img1} alt="car 1"/>
                        </div>
                        <div>
                            <img src={img1} alt="car 1"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Photo