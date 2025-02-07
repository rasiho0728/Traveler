export const BlackListMember = {
  title: "BlackListMember",
  columns: [
    {
      name: "#",
      selector: row => <span className={row.txtClass}>{row.ticketid}</span>,
      sortable: true
    },
    {
      name: "HOLIDAY DAY",
      selector: row => <span className={row.txtClass}>{row.Holidayday}</span>,
      sortable: true
    },
    {
      name: "HOLIDAY DATE",
      selector: row => <span className={row.txtClass}>{row.holidaydate}</span>,
      sortable: true
    },
    {
      name: "HOLIDAY NAME",
      selector: row => <span className={row.txtClass}>{row.holidayname}</span>,
      sortable: true
    },
    {
      name: "ACTION",
      selector: () => { },
      sortable: true,
      cell: () => <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
        <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
      </div>
    }

  ],
  rows: [
    {
      ticketid: "01",
      Holidayday: "Tuesday",
      holidaydate: "1월 26일",
      holidayname: "테스형",
      txtClass: 'text-danger',
      mailcheck: 'X'
    },
    {
      ticketid: "02",
      Holidayday: "Friday",
      holidaydate: "4월 2일",
      holidayname: "김경민",
      txtClass: 'text-danger',
      mailcheck: 'X'
    },
    {
      ticketid: "03",
      Holidayday: "Monday",
      holidaydate: "4월 30일",
      holidayname: "지나은",
      txtClass: 'text-danger',
      mailcheck: 'O'
    },
    {
      ticketid: "04",
      Holidayday: "Wednesday",
      holidaydate: "4월 15일",
      holidayname: "김채린",
      txtClass: 'text-success',
      mailcheck: 'X'
    },
    {
      ticketid: "05",
      Holidayday: "Wednesday",
      holidaydate: "8월 22일",
      holidayname: "이정우",
      mailcheck: 'O'
    },
    {
      ticketid: "06",
      Holidayday: "Monday",
      holidaydate: "9월 30일",
      holidayname: "김풍달",
      mailcheck: 'O'
    },
    {
      ticketid: "07",
      Holidayday: "Tuesday",
      holidaydate: "10월 2일",
      holidayname: "최재성",
      mailcheck: 'O'
    },
    {
      ticketid: "08",
      Holidayday: "Wednesday",
      holidaydate: "11월 7일",
      holidayname: "정윤호",
      mailcheck: 'X'
    },
    {
      ticketid: "09",
      Holidayday: "Tuesday	",
      holidaydate: "12월 25일",
      holidayname: "김진헌",
      mailcheck: 'X'
    }
  ]
}