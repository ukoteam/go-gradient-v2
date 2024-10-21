import { FunctionComponent } from "react";
import styles from "./main-title.module.css";

type TPropsType = {
    title: string;
}

export const MainTitle: FunctionComponent<TPropsType> = (props) => {
    const { title } = props

    return(
        <div className={styles.mainTitle}>
            <h1 className={styles.mainTitle__h1}>
                {title}
            </h1>
        </div>
    )
}