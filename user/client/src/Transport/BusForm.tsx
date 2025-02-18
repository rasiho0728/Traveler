import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import { appear_animate, handleScroll, updateHalfHeight } from '../Comm/CommomFunc';
import { Link, useNavigate } from 'react-router-dom';
//2025-02-13수정 최의진
const BusForm: React.FC = () => {
  const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
  const [selectedTDate, setSelectedTDate] = useState<Date | null>(null);
  const navigate = useNavigate()
  useEffect(() => {
    // 요소의 [data-scrollax] 옵션을 분석 적용
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // ftco-animate 클래스를 가진 요소에 등장 효과 적용
    appear_animate()
  }, []);

  useEffect(() => {
    updateHalfHeight();
    window.addEventListener("resize", updateHalfHeight);
    return () => {
      window.removeEventListener("resize", updateHalfHeight);
    };
  }, []);

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const formData = new FormData();
        // formData
      } catch (error) {
        
      }
    }

  // const handleReservationClick = () => {
  //   navigate('/traveler/Transport/BusForm/Bus')
  // }
  return (
    <div>
      <div className='js-halfheight mb-4'
        style={{
          backgroundImage: "url('/images/transport/palace.jpg')", 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center', // 이미지 위치를 중앙에 맞추기
        }}>

      </div>
      <div className="container">
        <div className="sidebar-wrap bg-light ftco-animate">
          <h3 className="heading mb-4">가는 편 승차원 정보</h3>
          <form action="#">
            <div className="fields">
            <div className="form-group">
                <div className="select-wrap one-third">
                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                  <select name="" id="" className="form-control">
                    <option value="">출발지</option>
                    <option value="">서울경부</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="select-wrap one-third">
                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                  <select name="" id="" className="form-control">
                    <option value="">도착지</option>
                    <option value="">부산</option>
                 
                  </select>
                </div>
              </div>
              <div className="form-group">
                <DatePicker
                  selected={selectedFDate}
                  onChange={(date: Date | null) => setSelectedFDate(date)}
                  dateFormat="yyyy년 MM월 dd일" // 날짜 형식
                  className="form-control" // Bootstrap 스타일
                  locale="ko" // 로케일 설정
                  id="checkin_date"
                  placeholderText="Date from" // 플레이스홀더
                />
              </div>
              {/* <div className="form-group">
                <DatePicker
                  selected={selectedTDate}
                  onChange={(date: Date | null) => setSelectedTDate(date)}
                  dateFormat="yyyy년 MM월 dd일" // 날짜 형식
                  className="form-control" // Bootstrap 스타일
                  locale="ko" // 로케일 설정
                  id="checkin_date"
                  placeholderText="Date to" // 플레이스홀더
                />
              </div> */}
              <div className="form-group">
              </div>
              <div className="form-group">
                <input type="submit" value="예약하기" className="btn btn-primary py-3 px-5" 
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BusForm