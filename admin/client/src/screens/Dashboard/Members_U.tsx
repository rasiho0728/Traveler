import React, { useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import OurClients from "../../components/Clients/OurClients";
import PageHeader from "../../components/common/PageHeader";
import { MembersData } from "../../components/Data/AppData";

const Members_U: React.FC = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="회원목록" renderRight={() => {
        return <div className="col-auto d-flex w-sm-100">
          <button className="btn btn-dark btn-set-task w-sm-100 me-2" onClick={() => { setIsModal(true) }}><i className="icofont-plus-circle me-2 fs-6"></i>Add Employee</button>
        </div>
      }} />
      <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
        {
          MembersData.map((data, i) => {
            return <div key={"skhd" + i} className="col">
              <OurClients avatar={data.avatar} post={data.post} name={data.name} Companyname={data.Companyname} isMember={true} />
            </div>
          })
        }

      </div>
      <Modal centered show={isModal} size="lg" onHide={() => { setIsModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput877" className="form-label">직원 이름</label>
              <input type="text" className="form-control" id="exampleFormControlInput877" placeholder="이름을 입력해주세요." />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput977" className="form-label">직원 직급</label>
              <input type="text" className="form-control" id="exampleFormControlInput977" placeholder="직급을 입력해주세요." />
            </div>
            <div className="mb-3">
              <label htmlFor="formFileMultipleoneone" className="form-label">사진</label>
              <input className="form-control" type="file" id="formFileMultipleoneone" />
            </div>
            <div className="deadline-form">
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label htmlFor="exampleFormControlInput1778" className="form-label">ID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1778" placeholder="직원 ID" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="exampleFormControlInput2778" className="form-label">입사일</label>
                    <input type="date" className="form-control" id="exampleFormControlInput2778" />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-lg-6">
                    <label htmlFor="exampleFormControlInput177" className="form-label">로그인 ID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="직원 로그인 ID" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="exampleFormControlInput277" className="form-label">비밀번호</label>
                    <input type="Password" className="form-control" id="exampleFormControlInput277" placeholder="비밀번호를 입력해주세요." />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-lg-6">
                    <label htmlFor="exampleFormControlInput477" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput477" placeholder="이메일을 입력해주세요." />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="exampleFormControlInput777" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleFormControlInput777" placeholder="전화번호를 입력해주세요." />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col">
                    <label className="form-label">출근</label>
                    <select className="form-select" >
                      <option >주 4일</option>
                      <option value="1">월요일 ~ 목요일</option>
                      <option value="2">화요일 ~ 금요일</option>
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label">직급</label>
                    <select className="form-select" >
                      <option >사원</option>
                      <option value="1">대표</option>
                      <option value="2">팀장</option>
                      <option value="3">사원</option>
                      {/* <option value="4">Development</option>
                      <option value="5">Backend Development</option>
                      <option value="6">Software Testing</option>
                      <option value="7">Website Design</option>
                      <option value="8">Marketing</option>
                      <option value="9">SEO</option>
                      <option value="10">Other</option> */}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea78" className="form-label">업무 요약 (범위)</label>
              <textarea className="form-control" id="exampleFormControlTextarea78" rows={3} placeholder="해당 직원의 업무를 입력해주세요."></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>나가기</button>
          <button type="button" className="btn btn-primary">저장</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default Members_U;