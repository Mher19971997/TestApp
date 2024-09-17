import { Button, Typography, Space } from "antd";
import { Images } from "../../../../../assets";
import styles from "./Title.module.css";

const { Text } = Typography;

const Title = () => (
  <Space align="center" size="large">
    <Text className={styles.title}>Остатки сформированы на 01.04.2023 г.</Text>
    <Button
      type="primary"
      icon={<Images.Svg.Instruction />}
      className={styles.button}
    >
      Инструкции
    </Button>
  </Space>
);

export default Title;
