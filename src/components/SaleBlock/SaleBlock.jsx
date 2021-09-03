import React from "react";

import styles from "../SaleBlock/style.module.css";
import discImg from "../../assets/img/disc.jpg";
import { Link } from "react-router-dom";

function SaleBlock() {
    return (
        <div>
            <Link to="/buying">
                <img src={discImg} className={styles.imgDisc} alt="sale-pict"/>
            </Link>
        </div>
    );
}

export default SaleBlock;
