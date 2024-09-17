import { Table as AntTable } from 'antd';

import productTableData from './data/productTableData';
import data from './../../DATA.json';

import '../../index.css';

export default function Table() {
    const { columns } = productTableData();

    return (
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
    );
}
