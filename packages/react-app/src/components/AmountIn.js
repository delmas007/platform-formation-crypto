import React,{useState,useEffect,useRef} from 'react';
import {chevronDown} from "../assets";
import styles from "../styles";
import {useOnClickOutside} from "../utils";
import Exchange from "./Exchange";

function AmountIn({value,onChange,currencyValue,onSelect,currencies,isSwapping}){
    const [showList,setShowList] = useState(false);
    const [activeCurrency,setActiveCurrency] = useState("Select");
    const ref = useRef();
    useOnClickOutside(ref,() => setShowList(false));
    return (
        <div className={styles.amountContainer}>
            <input
                placeholder="0.0"
                className={styles.amountInput}
                value={value}
                type="number"
                disabled={isSwapping}
                onChange={(e) => typeof onChange === 'function' && onChange(e.target.value)}
            />
            <div className="relative" onClick={() => setShowList((prevState)=>(!prevState))}>
                <button className={styles.currencyButton}>
                    {activeCurrency}
                     <img src={chevronDown}
                          alt="chevron down"
                          className={`w-4 h-4 object-contain ml-2 ${showList ? 'rotate-180' : 'rotate-0'}`}/>
                </button>

                {showList && (
                <ul className={styles.currencyList}>
                    {[
                        {token: "ETH",tokenName: "ETH"},
                        {token: "DAI",tokenName: "DAI"},
                    ].map(({token,tokenName},index) => (
                        <li key={index}>
                            <li className={`${styles.currencyListItem} ${true ? 'bg-site-dim2' : ''} cursor-pointer`}>
                                {tokenName}

                            </li>
                        </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    )
}
export default AmountIn;
