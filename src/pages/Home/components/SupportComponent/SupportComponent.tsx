import React from 'react';
import { Row, Col, Typography, Divider, Menu } from 'antd';
import styles from './index.module.css';

const { Title, Text, Link } = Typography;

const SupportComponent: React.FC = () => {
    return (
        <Menu style={{ alignItems: 'start', paddingInline: "27px", justifyContent: 'start' }}>
            <Title level={4} style={{ color: 'white', fontSize: 16 }}>Техническая поддержка</Title>

            <Row className={styles.row}>
                <Col span={12} className={styles.labelBox}>
                    <Text className={styles.label}>Номер поддержки:</Text>
                    <Text className={styles.labelInfo}> 8 (999) 999 99 99</Text>
                </Col>
                <Col span={11} className={styles.labelBox}>
                    <Text className={styles.label}>Почта поддержки:</Text>
                    <Text className={styles.labelInfo}>
                        <Link href="mailto:pf1@werthesest.ru" style={{ color: 'white' }}>pf1@werthesest.ru</Link>
                    </Text>
                </Col>
            </Row>

            <Row style={{ marginTop: '10px' }}>
                <Col span={24} className={styles.labelBox}>
                    <Text className={styles.label}>Часы работы: </Text>
                    <Text className={styles.labelInfo}> Пн - Пт с 9:00 до 19:00 мск</Text>
                </Col>
            </Row>
            <Row style={{ marginTop: "37px" }}>
                <Col span={24}>
                    <Link href="#" className={styles.label}>Пользовательское соглашение</Link>
                </Col>
            </Row>
            <Divider className={styles.customDivider} />
            <Row>
                <Col span={24}>
                    <Link href="#" className={styles.label}>Политика конфиденциальности</Link>
                </Col>
            </Row>
            <Divider className={styles.customDivider} />
            <Row>
                <Col span={24}>
                    <Link href="#" className={styles.label}>Юридическая информация</Link>
                </Col>
            </Row>
            <Divider className={styles.customDivider} />
            <Row>
                <Col span={24}>
                    <Link href="#" className={styles.label}>Публичная оферта</Link>
                </Col>
            </Row>
        </Menu>
    );
};

export default SupportComponent;
