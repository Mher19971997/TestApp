import { Table as AntTable } from "antd";

import productTableData from "./data/productTableData";
// import data from "./../../DATA.json";

import "../../index.css";
import { IData } from "../../halpers/types";

interface IDataProps {
  data: IData[];
}

export default function Table({data}:IDataProps) {
  const { columns } = productTableData();

  return (
    <div className="table-container">
      <AntTable
        dataSource={data}
        columns={columns}
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
