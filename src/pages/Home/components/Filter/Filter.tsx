import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import { Button, Flex } from "antd";
import { Images } from "../../../../assets";
import styles from "./Filter.module.css";
import { CSVDownloadBtn } from "../ CSVDownloadBtn";
import data from "./../../../../DATA.json";
import { IFilter } from "../../../../halpers/types";
import { categories } from "../../../../halpers/constants";


const Filter = ({ setFilteredData, isCleared }: IFilter) => {
  const [filterCategories, setFilterCategories] = useState(categories);

  const handleTableData = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFilterCategories({ ...filterCategories, [name]: e.target.value });
  };

  const width = [144, 139, 20];

  const filteredDataHandler = () => {
    const filteredData = data.filter((item) => {
      return (
        (!filterCategories["Баркод"] || item.barcode.toString().includes(filterCategories["Баркод"].toString())) &&
        (!filterCategories["Артикул"] || item.product_article.includes(filterCategories["Артикул"].toString())) &&
        (!filterCategories["Размер"] || item.product_size.includes(filterCategories["Размер"].toString()))
      );
    });

    setFilteredData(filteredData);
  };

  useEffect(() => {
    isCleared && setFilterCategories(categories);
  }, [isCleared]);

  return (
    <div style={{ width: "100%" }}>
      <Title />
      <div>
        <Flex className={styles.cardContainer}>
          {Object.keys(filterCategories).map((item, index) => (
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
