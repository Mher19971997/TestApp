import React from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import { Button, Flex } from "antd";
import { Images } from "../../../../assets";
import styles from "./Filter.module.css";

interface ICategories {
  [key: string]: string;
}

const Filter = () => {
  const categories: ICategories = {
    Баркод: "5643242134323099",
    Артикул: "ДжЖСинМом0823",
    Размер: "44",
  };

  return (
    <div style={{ width: "100%" }}>
      <Title />
      <div>
        <Flex className={styles.cardContainer}>
          {Object.keys(categories).map((item) => {
            return <Card name={item} value={categories[item]} key={item} />;
          })}
        </Flex>
        <div style={{ marginTop: "10px" }}>
          <Button
            type="primary"
            className={`${styles.button} ${styles.formButton}`}
          >
            Сформировать
          </Button>
          <Button
            type="primary"
            icon={<Images.Svg.Download />}
            className={`${styles.button} ${styles.dounloadButton}`}
          >
            Экспорт
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
