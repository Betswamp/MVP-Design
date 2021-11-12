import { getAccount, getContract } from "./web3";
import { BETS_ABI } from './../Contract/Bets';
import { envdev } from "./environments";
import { fromWei } from "./utils";

export const getBETContract = async () => {
    const betContract = getContract(BETS_ABI, envdev.REACT_APP_BET_SMART_CONTRACT);
    return betContract;
}

export const getBETBalance = async () => {
    const betContract = await getBETContract();
    const address = await getAccount();
    const _balance = await betContract.methods.balanceOf(address).call();
    const  balanceofBET = fromWei(_balance, 'custom')
    return balanceofBET
}

export const addBETS = async () => {
    await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
            type: "ERC20",
            options: {
                address: envdev.REACT_APP_BET_SMART_CONTRACT,
                symbol: 'BETS',
                decimals: 8,
            },
        },
    });
}