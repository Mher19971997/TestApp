import React, { useState } from 'react'
import styles from './menu.module.css';
import { Button, Menu } from 'antd';
import { AppstoreOutlined, SettingFilled, CaretDownOutlined, DownOutlined } from '@ant-design/icons';
import { Images } from '../../assets';


const { SubMenu } = Menu;

export const MenuComponent = () => {
    const [openKeys, setOpenKeys] = useState([]);
    const onOpenChange = (keys: string[]) => {
        setOpenKeys([]);
    };


    return (
        <Menu
            theme="dark"
            mode="inline"
            openKeys={openKeys} // Control open submenus
            onOpenChange={onOpenChange} // Handle submenu open changes
            className={styles.menu}
            expandIcon={<Images.Svg.DownArrowIcon style={{ color: '#657193' }} />}
        >
            <div className={styles.menuHeader}>
                <div className={styles.finControl}>
                    <div className={styles.fin}><p>Фин</p></div>
                    <div><p>Контроль</p></div>
                </div>
                <div className={styles.menuTitleBox}>
                    <p>Меню</p>
                    <Images.Svg.CloseIcon />
                </div>
            </div>
            <SubMenu
                key="sub1"
                title="Настройки"
                style={{ paddingLeft: 5 }}
                className={styles.subMenu}
                icon={<Images.Svg.SettingIcon />}
            >
            </SubMenu>

            <SubMenu
                key="sub2"
                title="Внесение данных"
                className={styles.subMenu}
                icon={<Images.Svg.EditIcon />}
                style={{ paddingLeft: 5 }}
            >
            </SubMenu>

            <SubMenu
                key="sub3"
                title="Отчеты"
                className={styles.subMenu}
                icon={<Images.Svg.ReportIcon />}
                style={{ paddingLeft: 5 }}
            >
            </SubMenu>

            <SubMenu
                key="sub3"
                title="База знаний"
                className={styles.subMenu}
                icon={<Images.Svg.BaseIcon />}
                style={{ paddingLeft: 5 }}
            >
            </SubMenu>
        </Menu>
    );
};