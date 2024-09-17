import React, { Dispatch, SetStateAction, useState } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import { Button, Flex } from "antd";
import { Images } from "../../../../assets";
import styles from "./Filter.module.css";
import { CSVDownloadBtn } from "../ CSVDownloadBtn";
import data from "./../../../../DATA.json";
import { IData } from "../../../../halpers/types";

interface ICategories {
  [key: string]: string | number;
}

interface IFilter {
  setFilteredData: Dispatch<SetStateAction<IData[]>>;
}

const Filter = ({ setFilteredData }: IFilter) => {
  const categories: ICategories = {
    Баркод: "5643242134323099",
    Артикул: "ДжЖСинМом0823",
    Размер: "44",
  };
  const [filterCategories, setFilterCategories] = useState(categories);

  const handleTableData = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFilterCategories({ ...filterCategories, [name]: e.target.value });
  };
  const width = [144, 139, 20];

  const filteredDataHandler = () => {
    const filteredData = data.filter(
      (item) =>
        item.barcode === filterCategories["Баркод"] ||
        item.product_article === filterCategories["Артикул"] ||
        item.product_size === filterCategories["Размер"]
    );
    setFilteredData(filteredData);
  };
  return (
    <div style={{ width: "100%" }}>
      <Title />
      <div>
        <Flex className={styles.cardContainer}>
          {Object.keys(filterCategories).map((item, index) => {
            return (
              <Card
                type={["number", "text", "number"][index]}
                className={`${styles[`maxWidth_${width[index]}`]}`}
                name={item}
                value={filterCategories[item].toString().replace(/\s+/g, '')}
                key={item}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleTableData(e, item)
                }
              />
            );
          })}
          <Flex className={styles.container}>
            <span className={`${styles.text} ${styles.name}`}>Категория</span>
            <Flex className={`${styles.fullWidth} ${styles.selectContainer}`}>
              <span className={`${styles.text} ${styles.selectText}`}>
                Джинсы
              </span>
              <Images.Svg.Select />
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ marginTop: "10px" }}>
          <Button
            onClick={() => filteredDataHandler()}
            type="primary"
            className={`${styles.button} ${styles.formButton}`}
          >
            Сформировать
          </Button>
          <CSVDownloadBtn datas={data} downloadLoading={false} />
        </Flex>
      </div>
    </div>
  );
};

export default Filter;
