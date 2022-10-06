import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethLogo from "../assets/eth.png";
import companyLogo from "../assets/logo.svg";
import { TransactionContext } from "../context/TransactionContext";

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
};

const Header = () => {
  // Destructure wallet/account stuff from the context using 'useContext'
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  // Username for header display
  const [userName, setUserName] = useState<string>();
  useEffect(() => {
    if (currentAccount)
      // Display truncated account address
      setUserName(
        `${currentAccount.slice(0, 5)}...${currentAccount.slice(38)}`
      );
  }, [currentAccount]);

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={companyLogo} alt="switcheo" height={40} width={40} />
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        {/* Conditional rendering for connected wallet */}
        {currentAccount ? (
          // Wallet connected, display:
          <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>{userName}</div>
          </div>
        ) : (
          // Not connected, display:
          <div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect
            </div>
          </div>
        )}
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
