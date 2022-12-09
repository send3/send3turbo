import { Grid, GridItem } from "@chakra-ui/react";
import SendColumn from "./SendColumn";
import Library from "./Library";
import styles from "../styles/Home.module.css";

const SendReceivePage = () => {
  return (
    <div >
      <Grid
        className={styles.sendReceivePage}
        gap={10}
        templateColumns="repeat(3, 1fr)"
      >
        <GridItem colSpan={1}>
          <SendColumn />
        </GridItem>
        <GridItem colSpan={2}>
          <Library />
        </GridItem>
      </Grid>
    </div>
  );
};

export default SendReceivePage;
