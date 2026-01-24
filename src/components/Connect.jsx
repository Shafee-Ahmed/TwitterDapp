import React from 'react'
import Web3 from "web3";
import contractABI from "../contracts/main.json";
import profileContractABI from "../contracts/user.json";

const contractAddress = "0xD03ed2100F59eD19819093eDf1bf8618cC71Dc63";
const profileContractAddress = "0xDb17eDFBC8e9b5AAaea0fF0885E3B0f99771727E";


const Connect = ({
    web3,
    account,
    shortAddress,
    setContract,
    setAccount,
    setProfileContract,
    setWeb3
}) => {

    async function switchToSepolia() {
        try {
            await window.ethereum.request({
                method: "wallet_swtichEhtereumChain",
                params: [{ chainId: "0xaa36a7" }]
            })
        } catch (err) {
            if (err.code === 4902) {
                try {
                    await window.ethereum.reques({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: "0xaa36a7",
                            chainName: "Sepolia",
                            nativeCurrency: {
                                name: "ETH",
                                symbol: "ETH",
                                decimal: 18
                            },
                            rpcUrls: ["https://rpc.sepolia.org"],
                        }]
                    })
                } catch (addErr) {
                    console.error("failed to add sepolia network to metamask", addErr)

                }
            } else {
                console.error("failed to switch to sepolia network", err)
            }
        }
    }

    async function connectWallet() {
        if (window.ethereum) {
            try {
                await window.ethereum.enable();
                const networkId = await window.ethereum.request({
                    method: "net_version"
                });
                if (networkId !== "100") {
                    await switchToSepolia();
                }

                //user enables the app to connect to metamask
                const tempWeb3 = new Web3(window.ethereum);
                setWeb3(tempWeb3);
                const contractInstance = new tempWeb3.eth.Contract(
                    contractABI,
                    contractAddress
                );

                const profileContractInstance = new tempWeb3.eth.Contract(
                    profileContractABI,
                    profileContractAddress
                );
                setProfileContract(profileContractInstance);
                console.log("hioiiiii");

                const accounts = await tempWeb3.eth.getAccounts();
                console.log("accounts", accounts);

                if (accounts.length > 0) {
                    setContract(contractInstance);
                    setAccount(accounts[0]);
                }
                console.log("NAHHHHHH");
            } catch (err) {
                console.error("no web3 provider detected")
            }
        }
    }

    return (
        <div>
            <div className='connect'>
                {!account ? (<button onClick={connectWallet} id='connectWalletbtn'>
                    Connect Wallet
                </button>) : (
                    <div id="userAddress">Connected: {shortAddress(account)}</div>
                )}

            </div>
            <div id="connectMessage">
                {!account ? "Please connect your wallet to tweet." : ""}
            </div>
        </div>
    )
}

export default Connect
