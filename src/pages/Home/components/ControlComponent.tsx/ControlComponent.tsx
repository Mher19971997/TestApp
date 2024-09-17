import { Menu } from "antd";
import { useState } from "react";

import { MENU_ITEMS, menuHeaderStyle } from "../constants";
import { Images } from "../../../../assets";

import styles from './index.module.css';

const { SubMenu } = Menu;

const ControlComponent = () => {
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([]);
    };

    return (
        <Menu
            theme="dark"
            mode="inline"
            openKeys={openKeys}
            className={styles.controlMenu}
            onOpenChange={handleOpenChange}
            expandIcon={<Images.Svg.DownArrowIcon style={menuHeaderStyle} />}
        >
            <div className={styles.menuHeader}>
                <div className={styles.finControl}>
                    <div className={styles.fin}>
                        <p>Фин</p>
                    </div>
                    <div>
                        <p>Контроль</p>
                    </div>
                </div>
                <div className={styles.menuTitleBox}>
                    <p>Меню</p>
                    <Images.Svg.CloseIcon />
                </div>
            </div>
            {MENU_ITEMS.map(({ key, title, icon: Icon }) => (
                <SubMenu
                    key={key}
                    title={title}
                    className={styles.subMenu}
                    icon={<Icon />}
                />
            ))}
        </Menu>
    );
};

export default ControlComponent;
