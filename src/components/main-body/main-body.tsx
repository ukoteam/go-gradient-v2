import { FunctionComponent, useEffect } from "react";
import { AllCards } from "../all-cards/all-cards";
import styles from "./main-body.module.css";
import { useDispatch, useSelector } from "../../utils/hooks";
import { setFavoriteFlags, setInitialFavoriteService, uploadFavoriteService } from "../../services/actions/services-action";


export const MainBody: FunctionComponent = () => {
    const dispatch = useDispatch();

    const allCards = useSelector(store => store.servicesReducer.allServices);
    const favoriteCards = useSelector(store => store.servicesReducer.favoriteServices);

    useEffect(() => {
        !localStorage.getItem("favoriteServices") && localStorage.setItem("favoriteServices", "")
        let storage = localStorage.getItem("favoriteServices");
        storage && dispatch(uploadFavoriteService(storage));

        // favoriteCards && dispatch(setFavoriteFlags());

        // return (() => {
        //     dispatch(setInitialFavoriteService);
        // })
    }, [dispatch])

    return (
        <main className={styles.main}>
            {favoriteCards.length ? <AllCards data={favoriteCards} 
                    title="Избранное" /> : null}
            
            <AllCards data={allCards} 
                    title="Все сервисы" />
        </main>
    )
}