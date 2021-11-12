import Web3 from "web3";

import { provider } from "./web3";

export const formatNumber = (number) => {
    let _number = '';
    for (let i = 0; i < number.length; i ++) {
        if (i !== 0 && i % 3 === 0) {
            _number = ',' + _number;
        }
        _number = number[number.length - 1 - i] + _number;
    }
    return _number;
}

export const toUrl = (tokenPath) => {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export const fromWei = (number, unit) => {
    const web3Instance = new Web3(provider);
    let result = null;
    if (unit === 'custom') {
        result = web3Instance.utils.fromWei(number, 'gwei')
            if (result.length !== 1) {
            result = result + '0';
        }
    } else {
        result = web3Instance.utils.fromWei(number, unit)
    }
    return result;
}

export const strTimeToInt = (strTime) => {
    const dt = new Date(strTime).getTime();
    return dt / 1000;
}