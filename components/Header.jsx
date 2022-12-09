import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { GridItem, Grid, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <header className={styles.header}>
      <Grid
        className={styles.sendReceivePage}
        gap={10}
        templateColumns="repeat(4, 1fr)"
      >
        <GridItem colSpan={1}>
          <h1 className={styles.name}>send3</h1>
        </GridItem>
        <GridItem colSpan={1}>
          <Text className={styles.name}>FAQ</Text>
        </GridItem>
        <GridItem colSpan={1} className={styles.name}>
          <></>
        </GridItem>
        <GridItem colSpan={1} paddingTop="16px" alignSelf="right">
            <ConnectButton showBalance={false} accountStatus={"address"} />
        </GridItem>
      </Grid>
    </header>
  );
};

export default Header;
