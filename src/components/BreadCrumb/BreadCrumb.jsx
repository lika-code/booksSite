import React from 'react'

import styles from '../BreadCrumb/style.module.css'

function BreadCrumb(props) {

    function isLast(index) {
        return index === props.crumbs.length - 1;
    }

    return (
        <nav className={styles.breadCrumbItems}>
            <ol className={styles.breadCrumbList}>
                {props.crumbs.map((crumb, ci) => {
                    const disabled = isLast(ci) ? 'disabled' : '';

                    return(
                        <li key={ci} className={styles.breadCrumbItem}>
                            <button className={styles.btnLink} onClick={() => props.selected(crumb)}>
                                { crumb } >
                            </button>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default BreadCrumb
