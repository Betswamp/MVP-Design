import Web3 from 'web3';
import Web3Modal from "web3modal";

import { ConnectorID, CONNECTOR_ID } from './constants';
import { envdev } from './environments';

export let web3Instance = null;
export let web3Modal = null;
export let provider = null;

export const initInstance = async () => {
    if (web3Instance) {
        return web3Instance;
    } else {
        provider = await getValidProvider();
        web3Instance = new Web3(provider);
    }
}

export const loginProcess = async () => {
    await window.ethereum.enable();
    try {
        await checkChain();
    }
    catch (err) {
        console.log('check chain error:', err);
        window.location.replace('/')
    }
    await login();
}

export const getValidProvider = async () => {
    const connectorId = getConnectorId();
    if (connectorId === ConnectorID.MetaMask) {
        return window.ethereum;
    } else {
        return window.ethereum;
    }
}

export const getConnectorId = () => {
    return localStorage.getItem(CONNECTOR_ID);
}

export const observeMetaMaskEvents = () => {
    window.ethereum.on('accountsChanged', (accounts) => {
        console.log('account changed.')
        window.location.replace('/');
        return ;
    });
    window.ethereum.on('chainChanged', async (accounts) => {
        console.log('chain changed.')
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const expectedChainId = getMainChainInformation().chainId;
        if (parseInt(chainId, 16) !== expectedChainId) {
            window.location.replace('/');
        }
        return ;
    });
    // window.ethereum.on('disconnect', (accounts) => {
    //     console.log('account disconnect.')
    //     alert('disconnect')
    //     window.location.replace('/');
    //     return ;
    // });
}

export const checkChain = (force = true) => {
    return new Promise(async (resolve, reject) => {
        const chainId = await web3Instance.eth.getChainId();
        // const stopChainChecker = new Subject();
        const expectedChainId = getMainChainInformation().chainId;
        const providerNetworkOption = getMainChainInformation().providerNetworkOption;
        if (chainId !== expectedChainId) {
            if (force) {
                await window.ethereum.enable();
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{ 
                        chainId: providerNetworkOption.chainId, // A 0x-prefixed hexadecimal string
                        chainName: providerNetworkOption.chainName,
                        nativeCurrency: {
                            name: providerNetworkOption.nativeCurrency.name,
                            symbol: providerNetworkOption.nativeCurrency.symbol,// 2-6 characters long
                            decimals: 18,
                        },
                        rpcUrls: providerNetworkOption.rpcUrls,
                        blockExplorerUrls: providerNetworkOption.blockExplorerUrls,
                     }]
                })
                window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: getMainChainInformation().providerNetworkOption.chainId }]
                }).then(() => {
                    resolve(true);
                }).catch((err) => {
                    console.log('wallet_switchEthereumChain', err)
                    reject(false);
                })
                // timer(0, 1000).pipe(
                //     takeUntil(stopChainChecker),
                //     tap(async () => {
                //         const chainId = await web3Instance.eth.getChainId();
                //         if (chainId === expectedChainId) {
                //             stopChainChecker.next();
                //             stopChainChecker.complete();
                //             resolve(true);
                //         } else {
                //             stopChainChecker.next();
                //             stopChainChecker.complete();
                //             resolve(false);
                //         }
                //     })
                // ).subscribe();
            } else {
                resolve(false);
            }
        } else {
            resolve(true);
        }
    });
}

export const getMainChainInformation = () => {
    if (envdev.REACT_APP_MAIN_CHAIN_ID === 'mainnet') {
        return {
            chainId: 56,
            providerNetworkOption: {
                chainId: '0x38',
                chainName: 'Smart Chain',
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18
                },
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                blockExplorerUrls: ['https://bscscan.com']
            }
        };
    } else if (envdev.REACT_APP_MAIN_CHAIN_ID === 'bsc_testnet') {
        return {
            chainId: 97,
            providerNetworkOption: {
                chainId: '0x61',
                chainName: 'Binance Smart Chain Testnet',
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18
                },
                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                blockExplorerUrls: ['https://testnet.bscscan.com']
            }
        };
    }
}

export const login = () => {
    return new Promise(async (resolve, reject) => {
        const providerOptions = {
            // walletconnect: {
            //     package: WalletConnectProvider,
            //     options: { infuraId: environment.infraID } // TODO: add chainId - required
            // }
        };
        web3Modal = new Web3Modal({ cacheProvider: true, providerOptions });
        
        // if (!$(".web3modal-provider-container:contains('RECOMMENDED')").length) {
        //     $(".web3modal-provider-name:contains('Torus')")
        //         .parent()
        //         .prepend("<strong class='recommand-wallet'>RECOMMENDED WALLET</strong><br>");
        // }

       web3Modal
            .connect()
            .then((provider) => {
                saveConnectorId(provider);
                if (provider.selectedAddress) {
                    resolve(provider.selectedAddress);
                } else if (provider.accounts.length) {
                    resolve(provider.accounts[0]);
                } else {
                    provider.on('accountsChanged', (accounts) => {
                        resolve(accounts[0]);
                    });

                    provider.on('chainChanged', (chainId) => {
                        console.log(chainId);
                    });

                    provider.on('connect', (info) => {
                        console.log(info);
                    });

                    provider.on('disconnect', (error) => {
                        console.log(error);
                    });
                }
            })
            .catch((e) => {
                console.log('error at web3modal', e);
                reject(e);
            });
    });
}

export const saveConnectorId = (provider) => {
    if (provider.isMetaMask) {
        observeMetaMaskEvents();
        localStorage.setItem(CONNECTOR_ID, ConnectorID.MetaMask);
    } else {
        return;
    }
}

export const clearInstance = () => {
    web3Instance = null;
}

export const getAccount = async () => {
    const account = await web3Instance.eth.getAccounts();
    return account[0];
}

export const getContract = (abi, address) => {
    let web3 = web3Instance;
    const customeContract = new web3.eth.Contract(abi, address);
    return customeContract;
}

export const disconnectWallet = () => {
    window.location.replace('/');
}