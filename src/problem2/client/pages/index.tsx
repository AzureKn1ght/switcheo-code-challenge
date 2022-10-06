import type { NextPage } from "next";
import Header from "../components/Header";
import Main from "../components/Main";
import Head from "next/head";

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
};

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Fancy Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Main />
      {/* Todo if have time */}
      {/* <TransactionHistory /> */}
      <br />
    </div>
  );
};

export default Home;
