import React,{useState,useEffect,useRef} from 'react';
import {chevronDown} from "../assets";
import styles from "../styles";
import {useOnClickOutside} from "../utils";
import Exchange from "./Exchange";

function AmountIn(){
    return (
        <div className={styles.amountContainer}>
            <input
                placeholder="0.0"
                className={styles.amountInput}
                value=""
                type="number"
                disabled={false}
                onChange={() => {}}
            />
            <div className="relative" onClick={() => {}}>
                <button className={styles.currencyButton}>
                    {"ETH"}
                </button>
            </div>
        </div>
    )
}
export default AmountIn;
