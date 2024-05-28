import {abis} from "@my-app/contracts";

export const getRouterInfo = async (routerAdress,web3) => {
    const router = new web3.eth.Contract(abis.router02,routerAdress);
    return {
        factory: await router.methods.factory().call(),
    }


}
