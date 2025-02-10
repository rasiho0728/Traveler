import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { BlackListMember } from "../../components/Data/BlackMail";

const MailSending: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [isEditModalData, setIsEditModalData] = useState<any>();

  const columnsT = [
    {
      name: "번호",
      selector: (row:any) => row.ticketid, //(<span className={row.txtClass}>{row.ticketid}</span> as any) as string,
      sortable: true
    },
    {
      name: "회원 ID",
      selector: (row:any) => row.holidayname, //<span className={row.txtClass}>{row.holidayname}</span>,
      sortable: true
    },
    {
      name: "신고일",
      selector: (row:any) => row.holidaydate, //span className={row.txtClass}>{row.holidaydate}</span>,
      sortable: true
    },
    {
      name: "전과 여부",
      selector: (row:any) => row.mailcheck, //<span className={row.txtClass}>{row.holidayname}</span>,
      sortable: true
    },
    {
      name: "발송 여부",
      // selector: () => { },
      sortable: true,
      cell: (row:any) => <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-secondary" onClick={() => { setIsModal(true); setIsEditModalData(row) }}><i className="icofont-edit text-success"></i></button>
        <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
      </div>
    }

  ]
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="경고메일 발송 목록" renderRight={() => {
        return <div className="col-auto d-flex w-sm-100">
          <button className="btn btn-dark btn-set-task w-sm-100 me-2" onClick={() => { setIsModal(true) }}><i className="icofont-plus-circle me-2 fs-6"></i>Add Holidays</button>
        </div>
      }} />
      <div className="row clearfix g-3">
        <div className="card">
          <div className="card-body">
            <DataTable
              title={BlackListMember.title}
              columns={columnsT}
              data={BlackListMember.rows}
              // defaultSortField="title"
              pagination
              selectableRows={false}
              className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
              highlightOnHover={true}
            />
          </div>
        </div>
      </div>
      <Modal centered show={isModal} onHide={() => { setIsModal(false); setIsEditModalData("") }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{isEditModalData ? "Edit" : "Add"} Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Holiday Name</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onClick={() => { }} value={isEditModalData ? isEditModalData.holidayname : ""} />
          </div>
          <div className="mb-3">
            <label className="form-label">Holiday Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput2778" onClick={() => { }} value={isEditModalData ? isEditModalData.holidaydate : ""} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>Done</button>
          <button type="button" className="btn btn-primary">Sent</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default MailSending;