import {
  Text,
  Button,
  FormControl,
  Input,
  VStack,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Send = () => {
  return (
    <div className={styles.minWidth300}>
      <VStack align="stretch" spacing={5} >
        <Text className={styles.sectionTitle}>Send</Text>

        <FormControl isRequired minWidth="11vw">
          <Input
            aria-label="upload file"
            className={styles.fileEntry}
            placeholder="Attach your file"
            minHeight="400px"
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <Input
            autoComplete="off"
            placeholder="Enter recipient wallet address"
            size="md"
            className={styles.fieldEntry}
          />
        </FormControl>
        <Button textAlign="right" maxWidth="8vw" colorScheme="teal">Send</Button>
      </VStack>
    </div>
  );
};

export default Send;
