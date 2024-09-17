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
  const [filteredData, setFilteredData] = useState<IData[]>([]);
  const [isCleared, setIsCleared] = useState<boolean>(false);

  const onLoad = () => {
    const itemsBeforeLast = data.slice(0, -1);
    const productQuantity = itemsBeforeLast.reduce((acc, item) => acc + +item.product_quantity, 0);
    const sum = itemsBeforeLast.reduce((acc, item) => acc + +item.price, 0);

    const updatedFiltered = data.map((item, index) => {
      if (index === data.length - 1) {
        return {
          ...item,
          product_quantity: productQuantity,
          price: sum
        };
      }
      return item;
    });
    setFilteredData(updatedFiltered as IData[]);
  }

  const onClear = () => {
    setFilteredData([]);
    setIsCleared(true);
  }

  return (
    <Flex className={styles.container}>
      <MenuComponent />
      <Flex className={styles.personalAccountContainer}>
        <UserProfile />
        <Filter setFilteredData={setFilteredData} isCleared={isCleared} />
        <UploadData onLoad={onLoad} onClear={onClear} />
        <Table data={filteredData} />
      </Flex>
    </Flex>
  );
};

export default Home;
