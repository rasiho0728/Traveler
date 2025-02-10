import React, { useState } from 'react'
import PageHeader from '../../components/common/PageHeader';
import DataTable from 'react-data-table-component';
import AddNewUserModal from '../../components/common/AddNewUserModal';
import { PayListData } from '../../components/Data/MyPay';
const MyPay: React.FC = () => {
    const [isAddUserModal, setIsAddUserModal] = useState(false);

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="결제내역" />  
            <div className="row clearfix g-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <DataTable
                                title={PayListData.title}
                                columns={PayListData.columns}
                                data={PayListData.rows}
                                // defaultSortField="title"
                                pagination
                                selectableRows={false}
                                className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                                highlightOnHover={true}
                                onRowClicked={() => { setIsAddUserModal(true) }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AddNewUserModal show={isAddUserModal} onClose={() => { setIsAddUserModal(false) }} />
        </div>
    )
}

export default MyPay