import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Getinspired | Your quote of the day.</h1>
      <h4></h4>
    </div>
  );
};

export default Home;
