import { Flex } from "antd";
import styles from "./Card.module.css";

interface ICard {
  name: string;
  value: string;
}

const Card = ({ name, value }: ICard) => {
  return (
    <Flex className={styles.container}>
      <span className={styles.text}>{name}</span>
      <div className={styles.valueContainer}>
        <span className={styles.valueext}>{value}</span>
      </div>
    </Flex>
  );
};

export default Card;
