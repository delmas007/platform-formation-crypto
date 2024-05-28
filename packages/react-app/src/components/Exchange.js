import React, {useState} from 'react';
import {Contract} from "@ethersproject/contracts";
import {abis} from "@my-app/contracts";
import  {ERC20,useEthers,useContractFunction,useTokenAllowance,useTokenBalance} from "@usedapp/core";
import {ethers} from "ethers";
import {parseUnits} from "ethers/lib/utils";
import {ROUTER_ADDRESS} from "../config";

function Exchange({pools}) {
    return (
        <div>Exchange</div>
    );
}

export default Exchange;