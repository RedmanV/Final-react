import React from 'react'
import '/src/stylesheets/Footer.css';

function Footer() {
    return (
        <footer className="pie-pag">
            <div className="grupo-1">
                <div className="box">
                    <a href="#">
                        <img className="logo-footer" src="src/assets/Logo_titilar.png" alt="Logo Titilar" />
                    </a>
                </div>
                <div className="box">
                    <h4>SIGUENOS</h4>
                    <div className="red-social">
                        <a href="https://www.instagram.com/?hl=es-la" className="fa fa-instagram"></a>
                        <a href="https://es-la.facebook.com/" className="fa fa-facebook"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2022 <b>Titilar</b> - Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}

export default Footer