import React from 'react';
import { Table as AntTable } from 'antd';  // Import the Table from the Ant Design library
import productTableData from './data/productTableData';
import data from './../../DATA.json';
import '../../index.css'

export default function Table() {
    const { columns } = productTableData();

    return (
        <div style={{ width: '60%', height: '719px' }}>
            <div className="table-container">
                <AntTable
                    dataSource={data}
                    columns={columns}
                    showSorterTooltip={{ target: 'sorter-icon' }}
                    scroll={{
                        x: 1000, 
                        y: 719    
                    }}
                    pagination={false}
                />
            </div>
        </div>
    );
}
