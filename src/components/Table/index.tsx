import { Table as AntTable } from "antd";
import productTableData from "./data/productTableData";
import "../../index.css";
import { IData } from "../../halpers/types";

interface IDataProps {
  data: IData[];
  setChangedData?: (record: IData) => void;
  handleCellDoubleClick: (record: IData, col: string) => void;
}

export default function Table({
  data,
  setChangedData,
  handleCellDoubleClick,
}: IDataProps) {
  const { columns } = productTableData();

  const modifiedColumns = columns.map((col) => ({
    ...col,
    onCell: (record: IData) => ({
      onDoubleClick: () => handleCellDoubleClick(record, col.dataIndex),
    }),
  }));

  return (
    <div className="table-container">
      <AntTable
        dataSource={data}
        columns={modifiedColumns}
        showSorterTooltip={{ target: "sorter-icon" }}
        scroll={{
          x: 3000,
          y: 719,
        }}
        pagination={false}
      />
    </div>
  );
}
