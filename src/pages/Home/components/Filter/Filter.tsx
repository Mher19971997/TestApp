import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import { Button, Flex } from "antd";
import { Images } from "../../../../assets";
import styles from "./Filter.module.css";
import data from "./../../../../DATA.json";
import { IData, IFilter } from "../../../../halpers/types";
import { categories } from "../../../../halpers/constants";
import { CSVDownloadBtn } from "../ CSVDownloadBtn";

const Filter = ({ setFilteredData, isCleared }: IFilter) => {
  const [filterCategories, setFilterCategories] = useState(categories);
  const [filtered, setFiltered] = useState<IData[]>([]);

  const handleTableData = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFilterCategories({ ...filterCategories, [name]: e.target.value });
  };


  const filteredDataHandler = () => {
    const lastItem = data[data.length - 1];
    const filteredData = data
      .slice(0, -1)
      .filter((item) => {
        return (
          (!filterCategories["Баркод"] || item.barcode.toString().includes(filterCategories["Баркод"].toString())) &&
          (!filterCategories["Артикул"] || item.product_article.includes(filterCategories["Артикул"].toString())) &&
          (!filterCategories["Размер"] || item.product_size.includes(filterCategories["Размер"].toString()))
        );
      });

    filteredData.push(lastItem);

    if (filteredData.length === 0) {
      setFilteredData([]);
      return;
    }

    setFilteredData(filteredData as any);

    if (filteredData.length == 1) {
      setFiltered([]);
    } else {
      setFiltered(filteredData as any);
    }
  };

  useEffect(() => {
    if (filtered.length === 0) {
      setFilteredData([]);
      return;
    }

    const itemsBeforeLast = filtered.slice(0, -1);
    const productQuantity = itemsBeforeLast.reduce((acc, item) => acc + +item.product_quantity, 0);
    const sum = itemsBeforeLast.reduce((acc, item) => acc + +item.price, 0);

    const updatedFiltered = filtered.map((item, index) => {
      if (index === filtered.length - 1) {
        return {
          ...item,
          product_quantity: productQuantity,
          price: sum
        };
      }
      return item;
    });

    setFilteredData(updatedFiltered as any);
  }, [filtered]);

  useEffect(() => {
    if (isCleared) {
      setFilterCategories(categories);
      setFiltered([]);
    }
  }, [isCleared]);

  return (
    <div style={{ width: "100%" }}>
      <Title />
      <div>
        <Flex className={styles.cardContainer}>
          {Object.keys(filterCategories).map((item, index) => (
            <Card
              type={["number", "text", "number"][index]}
              className={`${styles[`maxWidth_${[144, 139, 20][index]}`]}`}
              name={item}
              value={filterCategories[item].toString().replace(/\s+/g, '')}
              key={item}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleTableData(e, item)
              }
            />
          ))}
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
            onClick={filteredDataHandler}
            type="primary"
            className={`${styles.button} ${styles.formButton}`}
          >
            Сформировать
          </Button>
          <CSVDownloadBtn datas={data as any} downloadLoading={false} />
        </Flex>
      </div>
    </div>
  );
};

export default Filter;
