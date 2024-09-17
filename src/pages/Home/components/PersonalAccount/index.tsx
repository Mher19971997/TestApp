import styles from "./PersonalAccount.module.css";
import { Images } from "../../../../assets";
import { Button, Flex } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const UserProfile = () => {
  return (
    <Flex
      className={styles.userProfileContainer}
      style={{
        justifyContent: "space-between",
        maxWidth: "958px",
        width: "100%",
      }}
    >
      <Flex style={{ gap: "41px", alignItems: "center" }}>
        <Flex className={`${styles.userInfo}`}>
          <Images.Svg.User />
          <span>Иванов И.И</span>
        </Flex>
        <Button
          shape="round"
          icon={<CalendarOutlined />}
          className={`${styles.button} ${styles.buttonDate}`}
        >
          Тариф до 15.04.2024
        </Button>
      </Flex>
      <Flex>
        <Button className={`${styles.button} ${styles.logOutButton}`}>
          Выйти
        </Button>
        <Button className={`${styles.button} ${styles.aboutUsButton}`}>
          {" "}
          О нас
        </Button>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
