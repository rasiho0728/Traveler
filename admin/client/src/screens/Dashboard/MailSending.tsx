import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { BlackListMember } from "../../components/Data/BlackMail";

const MailSending: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [isEditModalData, setIsEditModalData] = useState<any>();
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]); // 선택된 회원 ID 상태 관리
  const [members, setMembers] = useState(BlackListMember.rows); // 동적 데이터 관리

  // 체크박스 클릭 이벤트
  const handleCheckboxChange = (id: number) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((memberId) => memberId !== id) : [...prev, id]
    );
  };

  // 선택된 회원 삭제
  const handleDeleteSelected = () => {
    setMembers((prev) => prev.filter((member) => !selectedMembers.includes(member.ticketid as unknown as number)));
    setSelectedMembers([]); // 선택 목록 초기화
  };

  const columnsT = [
    {
      name: "✔",
      cell: (row: any) => (
        <input
          type="checkbox"
          className="me-3"
          checked={selectedMembers.includes(row.ticketid)}
          onChange={() => handleCheckboxChange(row.ticketid)}
        />
      ),
      width: "60px"
    },
    {
      name: "번호",
      selector: (row: any) => row.ticketid,
      sortable: true
    },
    {
      name: "회원 ID",
      selector: (row: any) => row.holidayname,
      sortable: true
    },
    {
      name: "이메일", //  신고일 -> 이메일로 변경
      selector: (row: any) => row.holidaydate, 
      sortable: true
    },
    {
      name: "가입일", //  전과 여부 -> 가입일로 변경
      selector: (row: any) => row.mailcheck,
      sortable: true
    },
    {
      name: "회원 삭제", 
      sortable: true,
      cell: (row: any) => (
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-secondary deleterow">
            <i className="icofont-ui-delete text-danger"></i>
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="회원 목록" renderRight={() => (
        <div className="col-auto d-flex w-sm-100">
          {/* <button className="btn btn-dark btn-set-task w-sm-100 me-2" onClick={() => { setIsModal(true); }}>
            <i className="icofont-plus-circle me-2 fs-6"></i> Add Holidays
          </button> */}
        </div>
      )} />

      <div className="row clearfix g-3">
        <div className="card">
          <div className="card-body">
            {/* 삭제 버튼 추가 (선택된 항목이 있을 때만 활성화) */}
            <div className="mb-3">
              <Button
                variant="danger"
                onClick={handleDeleteSelected}
                disabled={selectedMembers.length === 0}
              >
                선택한 회원 삭제
              </Button>
            </div>

            <DataTable
              title={BlackListMember.title}
              columns={columnsT}
              data={members} // 동적 데이터 적용
              pagination
              selectableRows={false}
              className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
              highlightOnHover={true}
            />
          </div>
        </div>
      </div>

      {/* 모달창 */}
      <Modal centered show={isModal} onHide={() => { setIsModal(false); setIsEditModalData(""); }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{isEditModalData ? "Edit" : "Add"} Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Holiday Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="이름을 입력하세요"
              value={isEditModalData ? isEditModalData.holidayname : ""}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Holiday Date</label>
            <input
              type="date"
              className="form-control"
              value={isEditModalData ? isEditModalData.holidaydate : ""}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false); }}>Done</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MailSending;
