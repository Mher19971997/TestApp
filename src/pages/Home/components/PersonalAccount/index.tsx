import React from "react";
import styles from "./PersonalAccount.module.css";
import { Images } from "../../../../assets";
import { Button, Flex } from "antd";
import {CalendarOutlined} from "@ant-design/icons"

const UserProfile = () => {
  return (
    <div className={styles.userProfileContainer}>
      <Flex>
        <Flex className={`${styles.userInfo}`}>
          <Images.Svg.User />
          <span>Иванов И.И</span>
        </Flex>
        <Button
          type="primary"
          shape="round"
          icon={<CalendarOutlined />}
          style={{
            borderColor: "#cce3ff",
            color: "#1890ff",
            backgroundColor: "#f0faff",
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
          }}
        >
          Тариф до 15.04.2024
        </Button>
      </Flex>
    </div>
  );
};

export default UserProfile;
