import { Button } from "antd";

import styles from "./menu.module.css";
import { Images } from "../../../../assets";
import SupportComponent from "../SupportComponent/SupportComponent";
import ControlComponent from "../ControlComponent.tsx/ControlComponent";


export const MenuComponent = () => {
    return (
        <div className={styles.container}>
            <ControlComponent />
            <SupportComponent />
            <Button className={styles.contactButton} icon={<Images.Svg.ContactIcon />}>
                Связаться с нами
            </Button>
        </div>
    );
};
