import { FunctionComponent } from "react";
import { Card } from "../card/card";
import styles from "./all-cards.module.css";
import { TCardType } from "../../utils/types";
import { MainTitle } from "../main-title/main-title";

type TPropsType = {
    data: Array<TCardType | undefined>;
    title: string;
}

export const AllCards: FunctionComponent<TPropsType> = (props) => {
    const { data, title } = props

    return (
        data !== undefined ? <>
            <MainTitle title={title} />
            
            <section className={styles.all_cards}>
                    { data.map((item, index) => item !== undefined && <Card item={item} key={index} />) }
            </section>
        </> : <></>
    )
}