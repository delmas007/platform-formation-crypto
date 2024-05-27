import  web3 from 'web3';
import { useEffect, useState } from 'react';
import {useConfig} from "@usedapp/core";
import {ROUTER_ADDRESS} from "../config";

export const loadPools = async (provideUrl) => {
    const provider = new web3.providers.HttpProvider(provideUrl);
    const web3 = new web3(provider);
    const routerInfo = null;
    const factoryInfo = null;
}

export const usePools = () => {
    const {pools,setPools} = useState({});
    const {loading,setLoading} = useState(true);
    const {readOnlyChainId,readOnlyUrls} = useConfig();

    useEffect(() => {
        loadPools(readOnlyUrls[readOnlyChainId]).then((pools) => {
            setPools(pools);
            setLoading(false);
        } )

    }, [loading,readOnlyChainId])

    return [loading,pools]
}
