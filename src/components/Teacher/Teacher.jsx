import React from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './Teacher.module.scss'
import teacher from '../../img/car_main.png'
import bg from '../../img/backgroundNota.svg'
import checkMark from '../../img/checkMark.svg'

const Teacher = () => {
    return(
        <section className={classes.teacher} id = 'BlockToScrollTeacher'>
            <div className="g-container">
                <TitleBlock title = {'Nasze Usługi'}/>
                <div className={classes.teacher__wrapper}>
                    <img src={bg} alt='background' className={classes.teacher__wrapper_bg}/>
                    {/* <h3 className={classes.teacher__wrapper_title}>Галина</h3> */}
                    <div className={classes.teacher__wrapper__block}>
                        <div className={classes.teacher__wrapper__block__text}>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>DIAGNOSTYKA UKŁADU PALIWOWEGO</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>DIAGNOSTYKA ZAWIESZENIA</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>DIAGNOSTYKA SILNIKA</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>DIAGNOSTYKA ELEKTRYKI TWOJEGO SAMOCHODU</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>DIAGNOSTYKA UKŁADU HAMULCOWEGO</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>Diagnostyka ciała</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>Diagnostyka przy zakupie</p>
                            </div>
                        </div>
                        <div style={{position: 'relative'}}>
                            <img src = {teacher} alt = {'Halina teacher'} className={classes.teacher__wrapper__block_img}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teacher