import { Images } from "../../../../assets";
import { Button, Flex } from "antd";
import styles from "./UploadData.module.css";


interface IUpload {
  onLoad?: () => void;
  onClear?: () => void;
}

const UploadData = ({onLoad, onClear}:IUpload) => {
  return (
    <Flex className={`${styles.container} ${styles.fullWidth}`}>
      <div className={`${styles.borderTop} ${styles.fullWidth}`} />
      <Flex className={styles.itemsContainer}>
        <Flex className={styles.itemContainer} onClick={onLoad} data-cy='loadData'>
          <Images.Svg.Upload />
          <span className={styles.text}>Загрузить данные из csv</span>
        </Flex>
        <Flex className={styles.itemContainer}>
          <Images.Svg.Edit />
          <span className={styles.text}>Изменить данные</span>
        </Flex>
      </Flex>
      <Flex className={styles.cancelCOntainer}>
        <div className={`${styles.fullWidth} ${styles.borderRight}`} />
        <Button className={styles.cancelButton} onClick={onClear}>
          <span className={styles.cancelText}>Очистить</span>
          <Images.Svg.Cancel />
        </Button>
      </Flex>
      <div className={`${styles.borderBottom} ${styles.fullWidth}`} />
    </Flex>
  );
};

export default UploadData;
