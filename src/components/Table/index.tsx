import { Table as AntTable } from "antd";
import productTableData from "./data/productTableData";
import "../../index.css";
import { IData } from "../../halpers/types";

interface IDataProps {
  data: any[];
  setChangedData: (record: any) => void;  // Update to accept a parameter
}

export default function Table({ data, setChangedData }: IDataProps) {
  const { columns } = productTableData();

  // Modify columns to handle double-click
  const modifiedColumns = columns.map((col: any) => ({
    ...col,
    onCell: (record: any) => ({
      onDoubleClick: () => {
        // Handle double-click here
        setChangedData(record); // Pass record as argument
      },
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
