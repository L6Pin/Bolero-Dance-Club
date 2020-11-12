import React from 'react';
import boleroMap from '../img/boleroMap.png'

const contact = () => (

    <div className="contact m_padding ">
            <div className="contact__mobileContainer">
            <div className="contact__info m_padding">
                <div className="contact__left">
                    <h3>KONTAKT</h3>
                    <p>telefon <span><a href="tel:+069/3333333636">069/3333333636</a></span></p>
                    <p>email <span>boleropz@gmail.com</span></p>
                    <div className="contact__socialIcons">
                    <i class="fab fa-2x fa-facebook-square"></i>
                    <i class="fab fa-2x fa-instagram-square"></i>
                    </div>
                </div>
                <div className="contact__right">
                <h3>ADRESA</h3>
                <p>Požarevac<span>Sime Simića 1</span></p>
                </div>
            </div>
            <div className="contact__map"><img className="mapMobile" src={boleroMap} alt=""/></div>
            <div className="contact__workHours m_padding">

                <h3>RADNO VREME</h3>
                <div className="hours">
                    <p>Ponedeljak:</p><p>08:00 - 20: 00</p>
                </div>
                <div className="hours">
                    <p>Utorak:</p><p>08:00 - 20: 00</p>
                </div>
                <div className="hours">
                    <p>Sreda:</p><p>08:00 - 20: 00</p>
                </div>
                                <div className="hours">
                    <p>Četvrtak:</p><p>08:00 - 20: 00</p>
                </div>
                <div className="hours">
                    <p>Petak:</p><p>08:00 - 20: 00</p>
                </div>
                <div className="hours">
                    <p>Subota:</p><p className="noHours">Ne radimo</p>
                </div>
                <div className="hours">
                    <p>Nedelja:</p><p className="noHours">Ne radimo</p>
                </div>
                
            </div>
            </div>
            <div className="contact__map"></div>
            {/* <img className="mapDesktop" src={boleroMap} alt=""/> */}
    </div>

);

export default contact;