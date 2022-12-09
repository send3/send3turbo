import { Text, Box, Button, Link } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";

const HomeContent = () => {
  return (
    <Box className={styles.home}>
      <Text className={styles.bigInfo}>
        Send and receive large files securely with your wallet address
      </Text>
      <Text className={styles.smallInfo}>
        Send3 is a file transfer tool that uses Ethereum and cryptography to
        transfer large files to anyone with a wallet address. Our service is
        highly secure and seriously fast.
      </Text>
      <Link href="/send" passHref>
        <Button>Launch App</Button>
      </Link>
    </Box>
  );
};

export default HomeContent;
