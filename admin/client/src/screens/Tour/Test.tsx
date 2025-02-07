import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Modal } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import { DiaryViewData } from "../../components/Data/AppDataTour";

const Test: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [siEditModal, setSiEditModal] = useState<any>();

  const columnT = [
    {
      name: "번호",
      selector: (row: any) => row.num,
      sortable: true,
      // cell: (row: any) => <a href="tickets-detail" className="fw-bold text-secondary">{row.num}</a>
    },
    {
      name: "제목",
      selector: (row: any) => row.title,
      sortable: true,
      cell: (row: any) => <a href="tickets-detail" className="fw-bold text-secondary">{row.title}</a>
    },
    {
      name: "닉네임",
      selector: (row: any) => row.assigned,
      sortable: true,
      cell: (row: any) => <div><img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.assigned}</span></div>,
      minWidth: "250px"
    },
    {
      name: "작성일",
      selector: (row: any) => row.createdate,
      sortable: true
    },
    {
      name: "대표감정",
      selector: (row: any) => { },
      sortable: true,
      // cell: (row: any) => <span className={`badge ${row.status === "Completed" ? 'bg-success' : "bg-warning"}`}>{row.status}</span>
      cell: (row: any) => {
        let badgeClass = "";
        
        switch (row.status) {
          case "기쁨":
            badgeClass = "bg-primary"; // 파란색
            break;
          case "분노":
            badgeClass = "bg-danger"; // 빨간색
            break;
          case "당황":
            badgeClass = "bg-warning"; // 노란색
            break;
          case "중립":
            badgeClass = "bg-secondary"; // 회색
            break;
          case "슬픔":
            badgeClass = "bg-info"; // 하늘색
            break;
          default:
            badgeClass = "bg-light text-dark"; // 기본값 (라이트 그레이)
        }
      
        return <span className={`badge ${badgeClass}`}>{row.status}</span>;
      }
      
    },
    {
      name: "삭제",
      selector: (row: any) => { },
      sortable: true,
      cell: (row: any) => <div className="btn-group" role="group" aria-label="Basic outlined example">
        {/* <button type="button" className="btn btn-outline-secondary" onClick={() => { setIsModal(true); setSiEditModal(row) }}><i className="icofont-edit text-success"></i></button> */}
        <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
      </div>
    }

  ]


  return (
    <div className="container-xxl">
      <PageHeader headerTitle="투어 다이어리" renderRight={() => {

      }} />
      <div className="row clearfix g-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <DataTable
                title={DiaryViewData.title}
                columns={columnT}
                data={DiaryViewData.rows}
                pagination
                selectableRows={false}
                className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                highlightOnHover={true}
              />
            </div>
          </div>
        </div>
      </div>
      


    </div>
  )

}

export default Test;