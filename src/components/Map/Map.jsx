import React from "react";
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './Map.module.scss'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import telegram from '../../img/telegram.svg'

const Map = () => {
    return(
        <section className={classes.map} id = 'BlockToScrollMap'>
            <div className="g-container">
                <TitleBlock title = {'Mapa'}/>
                <div className={classes.map__wrapper}>
                    <div className={classes.map__wrapper__map}>
                        <MapContainer 
                            style = {{height: '100%', width: '100%'}}
                            className = {classes.div}
                            center = {[52.2449287963997, 21.13621193928941]}
                            zoom={15}
                            scrollWheelZoom = {false}>
                            <TileLayer 
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <Marker
                                position={[52.2449287963997, 21.13621193928941]}>

                                </Marker>
                        </MapContainer>
                    </div>
                    <div className={classes.map__wrapper__address}>
                        <p className={classes.map__wrapper__address_title}>Adres:</p>
                        <div className={classes.map__wrapper__address__mainInfo}>
                            <p className={classes.map__wrapper__address__mainInfo_element}>Warszawa</p>
                            <p className={classes.map__wrapper__address__mainInfo_element}><a href="https://www.google.pl/maps/place/EMTI+car+repair+center/@52.2446299,21.1360671,17z/data=!4m15!1m8!3m7!1s0x471ed20ee31257d5:0x26efa361c6e3424b!2sM%C5%82odnicka+35,+04-239+Warszawa!3b1!8m2!3d52.2446299!4d21.1360671!16s%2Fg%2F11j3hq9y3t!3m5!1s0x471ed20ec1c7b09f:0x1ba4385e9aa9dbcd!8m2!3d52.2447841!4d21.1362276!16s%2Fg%2F1tdb_dc_?entry=ttu" target="_blank" rel="noreferrer">Młodnicka 35, 04-247</a></p>
                            <p className={classes.map__wrapper__address__mainInfo_element}>Telefon</p>
                            <p className={classes.map__wrapper__address__mainInfo_element}><a href="tel: +48 518519591">+48 518 519 591</a></p>
                        </div>
                        <div className={classes.map__wrapper__address__social}>
                            <a href={'https://www.facebook.com/profile.php?id=100078330973211'} target="_blank" rel="noreferrer" className={classes.map__wrapper__address__social__link}>
                                <img src={facebook} alt='facebook' className={classes.map__wrapper__address__social__link_img}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map