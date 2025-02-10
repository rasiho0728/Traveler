import React, { useState } from "react";
import ClientProfileCard from "../../components/Clients/ClientProfileCard";
import PageHeader from "../../components/common/PageHeader";
import { Modal, Button } from "react-bootstrap";

interface Employee {
  id: number;
  designation: string;
  details: string;
}

const EmployeeProfile: React.FC = () => {
  const [ismodal, setIsmodal] = useState(false);
  const [modalData, setModalData] = useState<any>();
  
  // 직원 데이터 (8개 초기값 설정)
  const [employees, setEmployees] = useState<Employee[]>(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      designation: "Web Developer",
      details: `Employee Id : 0000${i + 1}`,
    }))
  );

  // 선택된 직원 목록 관리
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);

  // 체크박스 클릭 이벤트
  const handleCheckboxChange = (id: number) => {
    setSelectedEmployees((prev) =>
      prev.includes(id) ? prev.filter((empId) => empId !== id) : [...prev, id]
    );
  };

  // 선택된 직원 삭제
  const handleDeleteSelected = () => {
    setEmployees((prev) => prev.filter((emp) => !selectedEmployees.includes(emp.id)));
    setSelectedEmployees([]); // 선택 목록 초기화
  };

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="회원관리" />
      
      {/* 삭제 버튼 추가 (선택된 항목이 있을 때만 활성화) */}
      <div className="mb-3">
        <Button 
          variant="danger" 
          onClick={handleDeleteSelected} 
          disabled={selectedEmployees.length === 0}
        >
          선택한 회원 삭제
        </Button>
      </div>

      <div className="row g-3">
        <div className="col-xl-8 col-lg-12 col-md-12">
          {/* 회원 목록 */}
          {employees.map((employee) => (
            <div key={employee.id} className="d-flex align-items-center border p-2">
              {/* 체크박스 추가 */}
              <input
                type="checkbox"
                className="me-3"
                checked={selectedEmployees.includes(employee.id)}
                onChange={() => handleCheckboxChange(employee.id)}
              />
              {/* 프로필 카드 */}
              <ClientProfileCard designation={employee.designation} details={employee.details} />
            </div>
          ))}
        </div>
      </div>

      {/* 모달 창 */}
      <Modal centered show={ismodal} onHide={() => setIsmodal(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="deadline-form">
            <form>
              {modalData?.information?.map((d: any, i: number) => (
                <div key={`modal-field-${i}`} className="row g-3 mb-3">
                  <div className="col">
                    <label className="form-label">{d.title}</label>
                    <input type="text" className="form-control" value={d.value} readOnly />
                  </div>
                </div>
              ))}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsmodal(false)}>닫기</Button>
          <Button variant="primary">전송</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmployeeProfile;
