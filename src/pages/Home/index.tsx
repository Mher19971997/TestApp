import { CSVDownloadBtn } from "./components/ CSVDownloadBtn";
import { MenuComponent } from "./components/Menu/Menu";
import data from "../../DATA.json";
import Table from "../../components/Table";
import UserProfile from "./components/PersonalAccount";
import styles from "./Home.module.css";
import { Flex } from "antd";
import Filter from "./components/Filter/Filter";
import UploadData from "./components/UploadData/UploadData";
import { useState } from "react";
import { IData } from "../../halpers/types";

const Home = () => {
  const [filteredData, setFilteredData] = useState<IData[]>(data);

  return (
    <>
      <Flex className={styles.container}>
        <div>
          <MenuComponent />
        </div>
        <div>
          <Flex className={styles.personalAccountContainer}>
            <UserProfile />
            <Filter setFilteredData={setFilteredData}/>
            <UploadData />
            <Table data={filteredData} />
          </Flex>
        </div>
      </Flex>
    </>
  );
};

export default Home;
