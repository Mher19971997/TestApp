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
  const [changedData, setChangedData] = useState<any>({});

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
    setFilteredData(updatedFiltered as any);
  }

  const onClear = () => {
    setFilteredData([]);
    setIsCleared(true);
  };
  const tableData = data.map((item) => ({
    id: item.id,
    barcode: item.barcode,
    product_brand: item.product_brand,
    product_name: item.product_name,
    product_quantity:
      changedData &&
      changedData.id === item.id &&
      changedData.product_quantity === item.product_quantity ? (
        <input value={"eeeeeeee"} />
      ) : (
        item.product_quantity
      ),
    price: 222,
    product_article: "A1235677999999",
    product_size: "50",
  }));

  return (
    <Flex className={styles.container}>
      <MenuComponent />
      <Flex className={styles.personalAccountContainer}>
        <UserProfile />
        <Filter setFilteredData={setFilteredData} isCleared={isCleared} />
        <UploadData onLoad={onLoad} onClear={onClear} />
        <Table data={tableData} setChangedData={setChangedData} />
      </Flex>
    </Flex>
  );
};

export default Home;
