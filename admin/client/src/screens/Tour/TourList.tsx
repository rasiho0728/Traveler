import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import CurrentClientProject from "../../components/Clients/CurrentClientProject";
import AddNewUserModal from "../../components/common/AddNewUserModal";
import PageHeader from "../../components/common/PageHeader";
import { TourData } from "../../components/Data/AppDataTour";
import TourCard from "../../components/Clients/TourCard";
import { Link, useNavigate } from "react-router-dom";
import TourUpload from "./TourUpload";

const TourList: React.FC = () => {

  const [isModal, setIsModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isAddUserModal, setAddUserModal] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [editModeldata, setEditModeldata] = useState<any>();

  const [show, setShow] = useState(false);

const navigate = useNavigate();

  return (
    <div className="container-xxl">
      <Tab.Container defaultActiveKey="All">
      <PageHeader headerTitle="투어 목록"
          renderRight={() => {
            return <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
              {/* <button type="button" className="btn btn-dark w-sm-100" onClick={() => { setIsModal(true); setModalHeader("Create Project") }}><i className="icofont-plus-circle me-2 fs-6"></i>Create Project</button> */}
              <button
                type="button"
                className="btn btn-dark w-sm-100"
                onClick={() => navigate(`${process.env.REACT_APP_BASE_URL}/tourlist/tour-upload`)}
              >
                <i className="icofont-plus-circle me-2 fs-6"></i>투어 업로드
              </button>
              <Nav variant="pills" className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100">
                <Nav.Item>
                  <Nav.Link eventKey="All">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Started">테마별</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Approval">성향별</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          }} />

        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 flex-column">
            <Tab.Content>
              <Tab.Pane eventKey="All">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {
                    TourData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <TourCard teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl} id={i+1}
                          onClickEdit={() => { setIsModal(true); setModalHeader("Edit Project"); setEditModeldata(d); }}
                          onClickDelete={() => { setDeleteModal(true) }}
                        />
                      </div>
                    })
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Started">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {
                    TourData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <TourCard teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl} id={i+1}
                          onClickEdit={() => { setIsModal(true) }}
                          onClickDelete={() => { setDeleteModal(true) }}
                        />
                      </div>
                    })
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Approval">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {
                    TourData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <TourCard teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl} id={i+1}
                          onClickEdit={() => { setIsModal(true) }}
                          onClickDelete={() => { setDeleteModal(true) }}
                        />
                      </div>
                    })
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Completed">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {
                    TourData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <TourCard teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl} id={i+1}
                          onClickEdit={() => { setIsModal(true) }}
                          onClickDelete={() => { setDeleteModal(true) }}
                        />
                      </div>
                    })
                  }
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>


      <Modal show={isDeleteModal} centered onHide={() => { setDeleteModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">투어 삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center flex-column d-flex">
          <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
          <p className="mt-4 fs-5 text-center">삭제하시겠습니까</p>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={() => { setDeleteModal(false) }}>취소</button>
          <button type="button" className="btn btn-danger color-fff">삭제</button>
        </Modal.Footer>
      </Modal>
      {/* <AddNewUserModal show={isAddUserModal} onClose={() => { setAddUserModal(false) }} /> */}
    </div>
  )
}

export default TourList;