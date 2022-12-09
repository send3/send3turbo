import * as React from "react";
import Header from "../components/Header";
import { Box } from "@chakra-ui/react";
import HomeContent from "../components/HomeContent";
import "@rainbow-me/rainbowkit/styles.css";
import styles from "../styles/Home.module.css";
import useTokenGated from "lib/useTokenGated";

const Index = () => {

  return (
    <Box className={styles.backgroundColor}>
      <Header />
      <Box className={styles.backgroundImage}>
        <HomeContent />
      </Box>
    </Box>
  );
};

export default Index;
