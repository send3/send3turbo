/* eslint-disable react/jsx-key */
import {
  Table,
  Text,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ButtonGroup,
  Button,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Library = () => {
  const [filesList, setFilesList] = useState([]);
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:3200/my-files/0x7b825cBA399b8A17c78f0064a4d1c21C98724B2E",
  //   }).then((result) => {
  //     console.log(result.data.rows)
  //     setFilesList(result.data.rows)
  //   })
  // }, []);
  return (
    <div className={styles.minWidth300}>
      <Text className={styles.sectionTitle}>Library</Text>
      <Table variant="simple" className={styles.table}>
        <Thead>
          <Tr>
            <Th color="white">SENDER ADDRESS</Th>
            <Th color="white">DATE RECEIVED</Th>
            <Th color="white" textAlign="right">
              ACTIONS
            </Th>
          </Tr>
        </Thead>
        {(filesList.length > 0) ? (
          <Tbody>
            {filesList?.length > 0 &&
              filesList.map(
                ({
                  created_at,
                  to_walletaddress,
                  from_walletaddress,
                  fileurl,
                  filememo,
                  filedetail,
                }) => {
                  return (
                    <Tr color="#38B2AC">
                      <Td>{from_walletaddress}</Td>
                      <Td>{created_at}</Td>
                      <Td textAlign="right">
                        <ButtonGroup>
                          <Button
                            colorScheme="teal"
                            onClick={() => {
                              window.location = fileurl;
                            }}
                          >
                            Download
                          </Button>
                          <Button colorScheme="red"> X </Button>
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  );
                }
              )}
          </Tbody>
        ) : (
          <Tbody>
            <Card>
              <CardBody >
                <Text className={styles.emptyTable}>
                Your library is empty.
                </Text>
              </CardBody>
            </Card>
          </Tbody>
        )}
      </Table>
    </div>
  );
};

export default Library;
