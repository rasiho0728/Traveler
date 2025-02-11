import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import AddNewUserModal from '../../components/common/AddNewUserModal';
import PageHeader from '../../components/common/PageHeader';
import { TrafficData } from '../../components/Data/Traffic';
import { useNavigate } from 'react-router-dom';

//TrafficData
const Transportissue: React.FC = () => {
    const [isAddUserModal, setIsAddUserModal] = useState(false);
    const navigate = useNavigate()

    const handleRoadClick = () => {
        navigate(`${process.env.REACT_APP_BASE_URL}/Transportissue/Roadissue`); 

    };
   const handleClick =() =>{
    navigate('');
   }
    return (
        <div className="container-xxl">
            <PageHeader headerTitle="교통 이슈 모니터링" />
            <div className="row clearfix g-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <DataTable
                                title={TrafficData.title}
                                columns={TrafficData.columns}
                                data={TrafficData.rows}
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
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button 
                            type="button" 
                            className="btn btn-outline-secondary"
                            onClick={handleClick} // 클릭 이벤트에 함수 연결
                        >기차
                    <i className="bi bi-train-lightrail-front-fill"></i>
                    </button>      
                    <button 
                            type="button" 
                            className="btn btn-outline-secondary"
                            onClick={handleRoadClick} // 클릭 이벤트에 함수 연결
                        >실시간 도로교통 정보
                    <i className="bi bi-train-lightrail-front-fill"></i>
                    </button>      
                                     
                    </div>
        </div>
    )
}

export default Transportissue