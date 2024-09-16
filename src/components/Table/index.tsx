
import React from 'react';
import { Table as AntTable } from 'antd';  // Import the Table from the Ant Design library
import productTableData from './data/productTableData';
import data from './../../DATA.json';

export default function Table() {  // Rename your component to avoid conflict
    const { columns } = productTableData();

    return (
        <div>
            <AntTable dataSource={data} columns={columns} showSorterTooltip={{ target: 'sorter-icon' }}
            />  {/* Use AntTable instead of Table */}
        </div>
    );
}