import React from 'react';
const Footer = ()=>{
    return(
        <>
        <footer className="footer">
            <div className="footer__group1">
                <div className="footer__group1__box">
                    <figure>
                        <a href="#">
                            <img alt="logo-footer" src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/banner-video.png"/>
                        </a>
                    </figure>
                </div>
                <div className="footer__group1__box">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos excepturi vitae consequatur praesentium expedita? </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam autem atque!</p>

                </div>
                <div className="footer__group1__box">
                    <h2>Nuestras Redes</h2>
                    <div className="footer__group1__box__red-social">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>
                </div>
            </div>

            <div className="footer__group2">
                <small>&copy; 2022 <b>Video Streaming</b> - Todos los derechos reservados.</small>
            </div>
        </footer>
        </>
    );
};
export default Footer;
