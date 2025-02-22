import React, { useState } from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
// import CurrentClientProject from "../../components/Clients/CurrentClientProject";
import AddNewUserModal from "../../components/common/AddNewUserModal";
import PageHeader from "../../components/common/PageHeader";
import { ProjectCardData } from "../../components/Data/Transport";
import Traffic from "../../components/Clients/Traffic";
/// 20250205최의진 추가
const Transport: React.FC = () => {

  const [isModal, setIsModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isAddUserModal, setAddUserModal] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [editModeldata, setEditModeldata] = useState<any>();

  return (
    <div className="container-xxl">
      <Tab.Container defaultActiveKey="All">
        <PageHeader headerTitle="Projects"
          renderRight={() => {
            return <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
              <button type="button" className="btn btn-dark w-sm-100" onClick={() => { setIsModal(true); setModalHeader("Create Project") }}><i className="icofont-plus-circle me-2 fs-6"></i>Create Project</button>
              <Nav variant="pills" className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100">
                <Nav.Item>
                  <Nav.Link eventKey="All">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Started">기차</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Approval">버스</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Completed">비행기</Nav.Link>
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
                    ProjectCardData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <Traffic teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                          onClickEdit={() => { setIsModal(true); setModalHeader("Edit Project"); setEditModeldata(d); }}
                          onClickDelete={() => { setDeleteModal(true) }}
                          onClickAdd={() => { setAddUserModal(true) }}
                        />
                      </div>
                    })
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Started">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {
                    ProjectCardData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <Traffic teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                          onClickEdit={() => { setIsModal(true) }}
                          onClickDelete={() => { setDeleteModal(true) }}
                          onClickAdd={() => { setAddUserModal(true) }}
                        />
                      </div>
                    })
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Approval">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {
                    ProjectCardData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <Traffic teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                          onClickEdit={() => { setIsModal(true) }}
                          onClickDelete={() => { setDeleteModal(true) }}
                          onClickAdd={() => { setAddUserModal(true) }}
                        />
                      </div>
                    })
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Completed">
                <div className="row g-3 gy-5 py-3 row-deck">
                  {
                    ProjectCardData.map((d: any, i: number) => {
                      return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <Traffic teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                          onClickEdit={() => { setIsModal(true) }}
                          onClickDelete={() => { setDeleteModal(true) }}
                          onClickAdd={() => { setAddUserModal(true) }}
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
      <Modal show={isModal} onHide={() => { setIsModal(false); setEditModeldata("") }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="formFileMultipleone" className="form-label">Project Images &amp; Document</label>
            <input className="form-control" type="file" id="formFileMultipleone" multiple={undefined} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
            <textarea className="form-control" id="exampleFormControlTextarea78" rows={3} placeholder="Add any extra details about the request"></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false); setEditModeldata(""); }}>Done</button>
          <button type="button" className="btn btn-primary">Create</button>
        </Modal.Footer>
      </Modal>
      <Modal show={isDeleteModal} centered onHide={() => { setDeleteModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Delete Project</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center flex-column d-flex">
          <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
          <p className="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={() => { setDeleteModal(false) }}>Cancel</button>
          <button type="button" className="btn btn-danger color-fff">Create</button>
        </Modal.Footer>
      </Modal>
      <AddNewUserModal show={isAddUserModal} onClose={() => { setAddUserModal(false) }} />
    </div>
  )
}

export default Transport;