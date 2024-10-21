import { FunctionComponent } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './service-page.module.css';
import data from '../../utils/new-data.json';
import { Question } from "../question/question";


export const ServicePage: FunctionComponent = () => {
    const param = useParams();
    const item = data.cards.find(item => item.id === param.id);

    return (
        <>
        {   item !== undefined ? <section className={styles.servicePage}>
                <div className={styles.servicePage__goBack}>
                    <Link to="/" className={styles.goBack}>Назад</Link>
                </div>
                

                <div className={styles.servicePage__background} style={{background: `url('${item.cardPage.background}') center/cover no-repeat`}}></div>

                <h1 className={styles.servicePage__title}>{item.name}</h1>
                
                <p className={styles.servicePage__description}>{item.cardPage.description}</p>

                {item.cardPage.admin.forConnection && <a href={`mailto:${item.cardPage.admin.forConnection}`} className={styles.servicePage__forConnection}>Запросить подключение</a>}

                {
                    item.cardPage.questions !== undefined ? <>
                        <h1 className={styles.servicePage__title}>Часто задаваемые вопросы</h1>
                        {
                            item.cardPage.questions.map(item2 => <Question question={item2} key={item.id} />)
                        }
                    </> : null
                }

                {item.cardPage.admin.name && 
                    <div className={styles.servicePage__adminInfo}>
                        <h2>Ответственный за&nbsp;сервис</h2>

                        <div>
                            <h2>{item.cardPage.admin.name}</h2>
                            <a href={`mailto:${item.cardPage.admin.mailTo}`}>Обратиться</a>
                        </div>
                    </div>
                }
            </section> : <>Wait</> }
        </>
    )
}