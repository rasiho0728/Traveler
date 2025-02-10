import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import { appear_animate,handleScroll,updateHeight } from '../Comm/CommomFunc';

const RoadForm: React.FC = () => {
     const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
        const [selectedTDate, setSelectedTDate] = useState<Date | null>(null);
    
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
            // js-fullheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
            updateHeight();
            window.addEventListener("resize", updateHeight);
            return () => {
                window.removeEventListener("resize", updateHeight);
            };
        }, []);
    return (
        <div className="sidebar-wrap bg-light ftco-animate">
            <h3 className="heading mb-4">가는 편 승차원 정보</h3>
            <form action="#">
                <div className="fields">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="출발지" />
                    </div>
                    <div className="form-group">
                        <div className="select-wrap one-third">
                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                            <select name="" id="" className="form-control">
                                <option value="">Select Location</option>
                                <option value="">강릉</option>
                                <option value="">대구</option>
                                <option value="">부산</option>
                                <option value="">포항</option>
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
                    <div className="form-group">
                        <DatePicker
                            selected={selectedTDate}
                            onChange={(date: Date | null) => setSelectedTDate(date)}
                            dateFormat="yyyy년 MM월 dd일" // 날짜 형식
                            className="form-control" // Bootstrap 스타일
                            locale="ko" // 로케일 설정
                            id="checkin_date"
                            placeholderText="Date to" // 플레이스홀더
                        />
                    </div>
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                        <input type="submit" value="예약하기" className="btn btn-primary py-3 px-5" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RoadForm