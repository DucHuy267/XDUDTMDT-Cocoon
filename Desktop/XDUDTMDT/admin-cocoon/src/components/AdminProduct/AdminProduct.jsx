import React from "react";
import { WapperHeader } from "./style";
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import TableConponent from "../TableComponent/TableComponent";

const AdminProduct = () => {
    return (
        <div>
            <WapperHeader> AdminProduct </WapperHeader>
            <div style={{ padding: '10px' }}>
                <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}> <PlusOutlined style={{ fontSize: '40px' }} /> </Button>
            </div>
            <TableConponent />
        </div>
    )
}

export default AdminProduct;