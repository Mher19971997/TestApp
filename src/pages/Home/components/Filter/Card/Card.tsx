import { Flex } from "antd";
import styles from "./Card.module.css";

interface ICard {
  name: string;
  value: string | number;
  className?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Card = ({ name, value, onChange, className, type }: ICard) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, name);
  };

  return (
    <Flex className={styles.container}>
      <span className={styles.text}>{name}</span>
      <div className={styles.valueContainer}>
        <input
          className={`${styles.valueText} ${className}`}
          value={value}
          onChange={handleChange}
          type={type}
        />
      </div>
    </Flex>
  );
};

export default Card;
