import * as React from "react";
import Header from "../components/Header";
import { Box } from "@chakra-ui/react";
import HomeContent from "../components/HomeContent";
import "@rainbow-me/rainbowkit/styles.css";
import styles from "../styles/Home.module.css";
import useTokenGated from "lib/useTokenGated";
import SendReceivePage from "../components/SendReceivePage";
import SendColumn from "../components/SendColumn";

const Send = () => {
  const badgeAddress = process.env.NEXT_PUBLIC_BADGE_ADDRESS || "";
  useTokenGated(badgeAddress, true);

  return (
    <Box className={styles.backgroundColor}>
      <Header />
      <Box className={styles.backgroundImage}>
        <SendReceivePage/>
        {/* <SendColumn/> */}
      </Box>
    </Box>
  );
};

export default Send;
