import { FunctionComponent, useEffect, useState } from "react";
import headerLogo from "../../images/header-logo.svg";
import styles from './header.module.css';
import { Link } from "react-router-dom";

export const Header:FunctionComponent = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
        const w = event.target as Window
        setScreenWidth(w.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return(
        <header>
            <div className={ styles.header_text }>
                <Link to="/"><img src={ headerLogo } alt="logo-header" /></Link>
                <h2 className={ styles.header_text__h2 }>{screenWidth >= 900 ? <>Цифровые сервисы компании <span>«Градиент»</span></> : `Go.gradient`}</h2>

                <h2 className={ styles.header_text__h2 } style={{display: 'none'}}>Go.gradient</h2>

            </div>
        </header>
    )
}