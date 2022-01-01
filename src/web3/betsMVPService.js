import { getAccount, getContract, web3Instance } from "./web3";
import { BETS_ABI } from './../Contract/BetswampMVP';
import { envdev } from "./environments";
import { strTimeToInt, fromWei } from './utils';

export const getBETMVPContract = async () => {
    const betMVPContract = getContract(
        BETS_ABI, 
        envdev.REACT_APP_BETSWAMP_MVP_CONTRACT);
    return betMVPContract;
}

export const addSubbCategory = async (sub_category) => {
    const betMVPContract = await getBETMVPContract();
    var getData = await betMVPContract.methods.addSubbCategory('0x0', sub_category);
    let data = getData.encodeABI()
    let res = await web3Instance.eth.sendTransaction({to: envdev.REACT_APP_BETSWAMP_MVP_CONTRACT, from: await getAccount(), data: data})
    return res
}

export const removeSubCategory = async (sub_category) => {
    const betMVPContract = await getBETMVPContract();
    const result = await betMVPContract.methods.removeSubCategory('0x0', sub_category).call();
    return result;
}

export const getSubCategory = async () => {
    const betMVPContract = await getBETMVPContract();
    const subCategories = await betMVPContract.methods.getSubCategory('0x0').call();
    return subCategories;
}

export const createEvent = async ({sub_category, name, time, endTime, event1, event2 }) => {
    const betMVPContract = await getBETMVPContract();
    // let time = strTimeToInt(Event.time);
    // let endTime = strTimeToInt(Event.endTime);
    console.log("lengh",sub_category, name, time, endTime, event1, event2)
    var getData = await betMVPContract.methods.createEvent('0x0', sub_category, name, time, endTime, event1, event2);
    let data = getData.encodeABI()
    await web3Instance.eth.sendTransaction({to: envdev.REACT_APP_BETSWAMP_MVP_CONTRACT, from: await getAccount(), data: data});
}

export const placeBet = async ({event_id, amount, occured}) => {
    const betMVPContract = await getBETMVPContract();
    // const result = await betMVPContract.methods.placeBet(0x4, 0x100, 0x0).call();
    // return result;
    console.log("length ",event_id, amount, occured)
    var getData = await betMVPContract.methods.placeBet(event_id, amount, occured).call({'from': await getAccount()});
    console.log('getdata',getData)
    // let data = getData.encodeABI()
    // return await web3Instance.eth.sendTransaction({to: envdev.REACT_APP_BETSWAMP_MVP_CONTRACT, from: await getAccount(), data: data});
}

export const validateEvent = async (event_id, occured) => {
    const betMVPContract = await getBETMVPContract();
    var getData = await betMVPContract.methods.validateEvent(event_id, occured).call({'from': await getAccount()});
    let data = getData.encodeABI();
    return await web3Instance.eth.sendTransaction({to: envdev.REACT_APP_BETSWAMP_MVP_CONTRACT, from: await getAccount(), data: data});
}
export const getValidationPoint = async () => {
    const betMVPContract = await getBETMVPContract();
    const validationPoint = await betMVPContract.methods.showValidationPoints().call();
    const  _validationPoint = fromWei(validationPoint, 'custom')
    return _validationPoint;
}

export const getBetsHistory = async () => {
    const betMVPContract = await getBETMVPContract();
    const betsHistory = await betMVPContract.methods.getUserEventHistory().call({'from': await getAccount()});
    return betsHistory;
}

export const getActiveEvents = async () => {
    const betMVPContract = await getBETMVPContract();
    const activeEvents = await betMVPContract.methods.getActiveEvents().call();
    return activeEvents;
}

export const getValidatedEvents = async () => {
    const betMVPContract = await getBETMVPContract();
    const validatedEvents = await betMVPContract.methods.getValidatedEvents().call();
    return validatedEvents;
}

export const totalEvents = async () => {
    const betMVPContract = await getBETMVPContract();
    const totalEvents = await betMVPContract.methods.getActiveEvents().call();
    return totalEvents;
}


export const getOccurrenceBetCount = async (eventID, occured) => {
    const betMVPContract = await getBETMVPContract();
    const occurrenceBetCount = await betMVPContract.methods.getOccurrenceBetCount(eventID, occured).call();
    return occurrenceBetCount;
}
export const getEventOccurrenceBetAmount = async (eventID, occured) => {
    const betMVPContract = await getBETMVPContract();
    const eventOccurrenceBetAmount = await betMVPContract.methods.getEventOccurrenceBetAmount(eventID, occured).call();
    return eventOccurrenceBetAmount;
}

export const getEvent = async (eventID) => {
    const betMVPContract = await getBETMVPContract();
    const eventOccurrenceBetAmount = await betMVPContract.methods.getEvent(eventID).call();
    return eventOccurrenceBetAmount;
}
