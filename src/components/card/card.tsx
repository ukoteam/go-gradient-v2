import { FunctionComponent } from "react";
import styles from "./card.module.css";
import flagFalse from "../../images/flag-false.svg"
import flagTrue from "../../images/flag-true.svg"
import { TCardType } from "../../utils/types";
import { useDispatch } from "../../utils/hooks";
import { addFavoriteService, deleteFavoriteService } from "../../services/actions/services-action";
import { Link } from "react-router-dom";

type TPropsType = {
    item: TCardType;
}

export const Card: FunctionComponent<TPropsType> = (props) => {
    const { name, link, logo, nameDescription, flag, id } = props.item;
    const dispatch = useDispatch();

    const flagClickHandler = () => {
        if (!flag) {
            !localStorage.getItem("favoriteServices") && localStorage.setItem("favoriteServices", "")
            dispatch(addFavoriteService(id));
            localStorage.setItem("favoriteServices", `${localStorage.getItem("favoriteServices")}${id}, `);
            
        } else { 
            dispatch(deleteFavoriteService(id));
            const storage = localStorage.getItem("favoriteServices")?.split(", ").filter(item => item !== id).join(", ");
            localStorage.setItem("favoriteServices", storage ? storage : "");

        }   
    }

    return (
        <div className={styles.card}>
        <div>
            <div className={styles.card__logo} style={{background: `url('${ logo }') center/cover no-repeat`}}>
                <div className={styles.flag} style={{background: `url('${flag ? flagTrue : flagFalse} ') center/cover no-repeat`}} onClick={flagClickHandler}></div>
            </div>

            <h3>{ nameDescription } <span>{name}</span></h3>
        </div>

        <div className={styles.card__buttons}>
            <a href={ link } target="_blank">
                <button className={styles.card__link_button}>Перейти</button>
            </a>

            <Link to={id} >
                <button className={styles.card__info_button}>
                    ?
                </button>
            </Link>
        </div>
    </div>
    )
}