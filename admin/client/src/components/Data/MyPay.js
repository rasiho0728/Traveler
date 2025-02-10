import React from 'react';
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";
import Avatar6 from "../../assets/images/xs/avatar6.jpg";
import Avatar7 from "../../assets/images/xs/avatar7.jpg";
import Avatar8 from "../../assets/images/xs/avatar8.jpg";




export const PayListData = {
  title: "Leaders List",
  columns: [
    {
      name: "예약자 명",
      selector: (row) => row.leadername,
      sortable: true,
      cell: row => (
        <div>
          <img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.leadername}</span>
        </div>

      )
      ,
      minWidth: "250px"
    },
    {
      name: "목적지",
      selector: (row) => row.destination,
      sortable: true
    },
    {
      name: "총 예약 인원수",
      selector: (row) => row.totalPeople,
      sortable: true
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true
    },
    {
      name: "출발일자",
      selector: (row) => row.departuretime,
      sortable: true
    },
    {
      name: "결제금액",
      selector: (row) => row.pay,
      sortable: true
    },
    // {
    //   name: "ASSIGNED STAFF",
    //   // selector: (row)=>{},
    //   sortable: true,
    //   cell: (row) => {
    //     return <div className="avatar-list avatar-list-stacked px-3">
    //       {row.assignedstaff.map((d, i) => <img key={"fibd" + i} className="avatar rounded-circle sm" src={d} alt="" />)}
    //       <span className="avatar rounded-circle text-center pointer sm" ><i className="icofont-ui-add"></i></span>
    //     </div>
    //   }
    // },
    {
      name: "STATUS",
      // selector: (row)=>{},
      sortable: true,
      cell: row => <span className="badge bg-success">{row.status}</span>
    },
    // {
    //   name: "삭제하기",
    //   // selector: (row)=>{},
    //   sortable: true,
    //   cell: () => <div className="btn-group" role="group" aria-label="Basic outlined example">
    //     <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
    //     <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
    //   </div>
    // }

  ],
  rows: [
    {
      leadername: "테스형",
      image: Avatar1,
      destination: "강원도 강릉",
      totalPeople: "2명",
      email: "PhilGlover@gmail.com",
      departuretime: "18/03/21",
      pay: "5만원",
      assignedstaff: [Avatar7, Avatar8],
      status: "출발예정",
    },
    {
      leadername: "홍길동",
      image: Avatar6,
      destination: "부산광역시",
      totalPeople: "5명",
      email: "RobertAnderson@gmail.com",
      departuretime: "14/01/21",
      pay: "4만원",
      assignedstaff: [Avatar2, Avatar1, Avatar4, Avatar7],
      status: "출발완료",
    },
    {
      leadername: "김길동",
      image: Avatar2,
      destination: "제주특별자치도 제주시",
      totalPeople: "8명",
      email: "RyanRandall@gmail.com",
      departuretime: "14/01/21",
      pay: "2만5천원",
      assignedstaff: [Avatar2, Avatar1, Avatar7, Avatar8],
      status: "출발완료",
    },
    {
      leadername: "도람뿌",
      image: Avatar2,
      destination: "대구광역시",
      totalPeople: "15명",
      email: "RyanStewart@gmail.com",
      departuretime: "13/01/21",
      pay: "5만5천원",
      assignedstaff: [Avatar2, Avatar4, Avatar7, Avatar8],
      status: "출발예정",
    },

  ]
}


