import React from 'react'

import styles from '../NewsList/style.module.css'
import News from '../News/News'

function NewsList({ itemsList }) {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>
                    Сегодня
                </h2>
                <p>
                    вторник, 31 августа
                </p>
                {
                    itemsList.map(obj => <News key={obj.key} name={obj.name} imgUrl={obj.img} desc={obj.desc}/>)
                }
            </div>
        </div>
    )
}

export default NewsList
