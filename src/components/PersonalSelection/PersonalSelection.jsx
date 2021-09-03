import React from "react";

import styles from "../PersonalSelection/style.module.css";
import Item from "../Item/Item";

function PersonalSelection({ items }) {

    return (
        <div className={styles.wrapper}>

            <div className={styles.selectionIntro}>
                <h3>Ваша персональная подборка</h3>
                <div className={styles.booksSelection}>
                    {
                        items.map(obj => <Item key={obj.key} name={obj.name} author={obj.author} rating={obj.rating} img={obj.img}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default PersonalSelection;
