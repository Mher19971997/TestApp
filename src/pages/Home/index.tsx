import { MenuComponent } from "./components/Menu/Menu";
import data from "../../DATA.json";
import Table from "../../components/Table";
import UserProfile from "./components/PersonalAccount";
import styles from "./Home.module.css";
import { Flex } from "antd";
import Filter from "./components/Filter/Filter";
import UploadData from "./components/UploadData/UploadData";
import { useState, ChangeEvent } from "react";
import { IData } from "../../halpers/types";
import { createTableData } from "../../halpers/misc";

interface IEditableCell {
  rowId: number | string | null;
  columnId: number | string | null;
}

const Home = () => {
  const [filteredData, setFilteredData] = useState<IData[]>(data);
  const [isCleared, setIsCleared] = useState<boolean>(false);
  const [editableCell, setEditableCell] = useState<IEditableCell>({
    rowId: null,
    columnId: null,
  });
  const [cellValue, setCellValue] = useState<string>("");

  const onLoad = () => {
    setFilteredData(data);
  };

  const onClear = () => {
    setFilteredData([]);
    setIsCleared(true);
  };

  const handleCellDoubleClick = (record: IData, columnId: string) => {
    setEditableCell({ rowId: record.id, columnId });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValue(e.target.value);
  };

  const handleInputBlur = (record: IData, columnId: string) => {
    setFilteredData(
      filteredData.map((item) => {
        if (item.id === record.id) {
          return { ...item, [columnId]: cellValue };
        }
        return item;
      })
    );
    setEditableCell({ rowId: null, columnId: null });
    setCellValue("");
  };

  const renderEditableCell = (
    item: IData,
    columnId: string
  ): JSX.Element | string => {
    if (editableCell.rowId === item.id && editableCell.columnId === columnId) {
      return (
        <input
          value={cellValue}
          onChange={handleInputChange}
          onBlur={() => handleInputBlur(item, columnId)}
          className={styles.input}
        />
      );
    }
    return item[columnId] as string;
  };

  const tableData = createTableData(filteredData, renderEditableCell);

  return (
    <Flex className={styles.container}>
      <MenuComponent />
      <Flex className={styles.personalAccountContainer}>
        <UserProfile />
        <Filter setFilteredData={setFilteredData} isCleared={isCleared} />
        <UploadData onLoad={onLoad} onClear={onClear} />
        <Table
          data={tableData as unknown as IData[]}
          handleCellDoubleClick={handleCellDoubleClick}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
