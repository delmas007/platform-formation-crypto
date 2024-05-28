import React, {useState} from 'react';
import {Contract} from "@ethersproject/contracts";
import {abis} from "@my-app/contracts";
import  {ERC20,useEthers,useContractFunction,useTokenAllowance,useTokenBalance} from "@usedapp/core";
import {ethers} from "ethers";
import {parseUnits} from "ethers/lib/utils";
import {ROUTER_ADDRESS} from "../config";
import {AmountIn, AmountOut, Balance} from "./index";
import {getAvailableTokens, getCounterpartTokens,findPoolByTokens,isOperationPending,getFailureMessage,getSuccessMessage} from "../utils";

function Exchange({pools}) {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="mb-8">
                <AmountIn

                />
                <Balance/>
            </div>
            <div className="mb-8">
                <AmountOut

                />
                <Balance/>
            </div>
        </div>
    );
}

export default Exchange;