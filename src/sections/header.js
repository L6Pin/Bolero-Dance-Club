import React from 'react';
import danceLady from '../img/danceLady.png';
import logo from '../img/logo.png';

const Header = () => (
    <div className="header ">
        <div className="rightDesktopColumn">
        <div className="header__top m_padding">
            <div>
                <img className="logo" src={logo} alt="" />
                <h1 >Bolero</h1>
                <h2>Plesni klub Bolero iz Požarevca osnovan je u martu 1991. godine. Od samog osnivanja se bavi širenjem plesne kulture, prvenstveno kod mladih a potom i odraslih.</h2>
                <a href="#" className="ctaDesktop">Zaplešite</a>
            </div>
            <div>
                <a href="#" className="cta">Zaplešite</a>
            </div>
        </div>
        </div>
        <div className="header__bottom">
            <img src={danceLady} alt="" />
            <div className="definition">
                <p className="definition__title">Ples /eng. Dance/</p>
                <p className="definition__text">ritmičko pokretanje tela, obično u skladu s muzikom i u ograničenom prostoru s ciljem izražavanja ideja ili emocija, oslobađanja energije, ili jednostavno uživanja u samom pokretu.</p>
            </div>
        </div>
    </div>
);

export default Header;