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
  const [filteredData, setFilteredData] = useState<IData[]>([]);
  const [isCleared, setIsCleared] = useState<boolean>(false);
  const [editableCell, setEditableCell] = useState<IEditableCell>({
    rowId: null,
    columnId: null,
  });
  const [cellValue, setCellValue] = useState<string>("");

  const onLoad = () => {
    const itemsBeforeLast = data.slice(0, -1);
    const productQuantity = itemsBeforeLast.reduce((acc, item) => acc + +item.product_quantity, 0);
    const sum = itemsBeforeLast.reduce((acc, item) => acc + +item.price, 0);

    const updatedFiltered = data.map((item, index) => {
      if (index === data.length - 1) {
        return {
          ...item,
          product_quantity: productQuantity,
          price: sum
        };
      }
      return item;
    });
    setFilteredData(updatedFiltered as IData[]);
  }

  const onClear = () => {
    setFilteredData([]);
    setIsCleared(true);
  };

  const handleCellDoubleClick = (record: IData, columnId: string) => {
    if (record[columnId] === "barcode") {
      return;
    } else {
      setEditableCell({ rowId: record.id, columnId });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValue(e.target.value);
  };

  const handleInputBlur = (record: IData, columnId: string) => {
    if (["barcode", "product_quantity", "price", "product_size"].includes(columnId)) {
      const valueAsNumber = parseFloat(cellValue);

      if (isNaN(valueAsNumber)) {
        alert("Invalid input! Please enter a valid number. Strings are not allowed for numeric fields.");
        setCellValue("");
        return;
      } else if (valueAsNumber < 0) {
        alert("Negative numbers are not allowed for this field.");
        setCellValue("");
        return;
      }
    }

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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, record: IData, columnId: string) => {
      if (e.key === "Enter") {
        handleInputBlur(record, columnId);
      }
    };
    const lastRowId = 101;
    if (editableCell.rowId === item.id && editableCell.columnId === columnId && editableCell.rowId !== lastRowId) {
      return (
        <input
          min={0}
          value={cellValue}
          className={styles.input}
          onChange={handleInputChange}
          onBlur={() => handleInputBlur(item, columnId)}
          onKeyDown={(e) => handleKeyDown(e, item, columnId)} 
          data-cy='inputCheck'
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
        <Filter setFilteredData={setFilteredData} isCleared={isCleared} filteredData={tableData} />
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
