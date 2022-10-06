import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// This exports the context for global state access
export const TransactionContext = React.createContext();
// https://reactjs.org/docs/context.html

let eth; //Check for injected web3
if (typeof window !== "undefined") {
  eth = window.ethereum;
}

export const TransactionProvider = ({ children }) => {
  // Metamask account state hook
  const [currentAccount, setCurrentAccount] = useState();

  // Form input data state hook
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
  });

  /**
   * Prompts user to connect their MetaMask wallet
   */
  const connectWallet = async (metamask = eth) => {
    try {
      // Prompt to install if metamask not installed
      if (!metamask) return alert("Please install metamask");

      // Popup to request for accounts info
      const accounts = await metamask.request({
        method: "eth_requestAccounts",
      });

      // Set the currentAccount state
      setCurrentAccount(accounts[0]);
      console.log("connected.");
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.");
    }
  };

  /**
   * Checks if MetaMask is installed and an account is connected
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      // Prompt to install if metamask not installed
      if (!metamask) return alert("Please install metamask ");

      // Already connected just get the info
      const accounts = await metamask.request({ method: "eth_accounts" });

      // Set currentAccount state if exits
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.");
    }
  };

  /**
   * Executes the sending transaction
   */
  const sendTransaction = async (metamask = eth) => {
    try {
      // Check if metamask exists and connected
      if (!metamask) return alert("Please install metamask ");

      // Destructure form data
      const { addressTo, amount } = formData;

      // Convert currency unit from ether to wei
      const parsedAmount = ethers.utils.parseEther(amount);

      // Create transaction object with form data
      const tx = {
        to: addressTo,
        value: parsedAmount,
      };

      // Get the network provider and signer
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      // Send the transaction and await confirmation
      const response = await signer.sendTransaction(tx);
      await response.wait();

      console.log(response.hash);
    } catch (error) {
      console.log(error);
    }
  };

  // Handles changes in the form data
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    // More stable way to handle form state changes
    // Credit: https://dev.to/dikamilo/comment/1i58g
  };

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {/* Exports all the values so that other components can use */}
      {/* Using context, we can avoid having to pass props around */}
      {children}
    </TransactionContext.Provider>
  );
};
