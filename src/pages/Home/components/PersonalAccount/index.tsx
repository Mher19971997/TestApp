import React from "react";
import styles from "./PersonalAccount.module.css";
import { Images } from "../../../../assets";
import { Flex } from "antd";

const UserProfile = () => {
  return (
    <div className={styles.userProfileContainer}>
      <Flex  className={`${styles.userInfo}`}>
        <Images.Svg.User />
        <span>Иванов И.И</span>
      </Flex >
    </div>
  );
};

export default UserProfile;
