import { FunctionComponent } from 'react';
import styles from './footer.module.css';

export const Footer: FunctionComponent = () => {
    const date = new Date();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__text}>
                <h3 className={styles.footer__text__h3}>Градиент, {date.getFullYear()}&nbsp;г.</h3>

                <a href="mailto:i-support@gradient.ru"><button className={styles.footer__text__button}>Связаться</button></a>
            </div>
        </footer>
    )
}