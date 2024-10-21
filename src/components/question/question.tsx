import { FunctionComponent, useState } from "react";
import styles from "./question.module.css";
import minus from '../../images/minus.svg'
import { TQuestionType } from "../../utils/types";

type TPropsType = {
    question: TQuestionType
}

export const Question: FunctionComponent<TPropsType> = (props) => {
    const [opened, setOpened] = useState<boolean>(false);
    const { title, steps } = props.question;


    const openContainerHandler = () => {
        setOpened(!opened);
    }

    return (
        <div className={ styles.question }>
            <div className={ styles.question__content }>
                <div className={styles.question__content__header} onClick={openContainerHandler}>
                    <h2>{ title }</h2>
                    <div>
                        <img className={styles.question__content__header_minus} src={minus} alt="button" />
                        <img className={styles.question__content__header_plus} src={minus} style={!opened ? {transform: "rotate(90deg)"} : {}} alt="button" />
                    </div>
                </div>

                {opened && <div className={styles.question__content__body}>
                    {
                        steps.map((item, index) => 
                        <div key={index} className={styles.question__content__body_steps}>
                            {item.text && <p>{item.text}</p>}
                            {item.links && <div className={styles.question__content__body_links}>
                                    {item.links.map((item2, index) => <a href={item2.link} key={index}>{item2.capture}</a>)}
                                </div>}
                            {item.image && <img className={styles.question__content__body_image} src={item.image} alt="Screenshot" />}
                        </div>)
                    }
                </div>}
            </div>

        </div>
    )
}