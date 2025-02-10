import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./TourDiary.css";

// PageCoverProps에서 children을 옵셔널로 처리
interface PageCoverProps {
  children?: React.ReactNode;  // children을 옵셔널로 설정
}

const PageCover = React.forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const FirstPageCover =  React.forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {
  return (
    <div className="firstcover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});


const LastPageCover =  React.forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {
  return (
    <div className="lastcover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

interface PageProps {
  number: string;
  children: React.ReactNode;
  user: string;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h3>{props.user}의 기록</h3>
      <div className="content">{props.children}</div>
      <div className="page-number">{props.number}</div>
    </div>
  );
});

const TourDiary: React.FC = () => {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("내용 입력");

  // 각 페이지별 더미데이터
  const pages = [
    {
      number: "1",
      imageUrl: "/images/mountain.jpg",
      comment: "이곳은 첫 번째 여행지입니다.",
      address: "서울, 대한민국",
    },
    {
      number: "2",
      imageUrl: "/images/restaurant-1.jpg",
      comment: "여기에서 멋진 경치를 봤습니다.",
      address: "부산, 대한민국",
    },
    {
      number: "3",
      imageUrl: "/images/seoul.jpg",
      comment: "세 번째 여행지는 이곳이었습니다.",
      address: "제주도, 대한민국",
    },
    {
      number: "4",
      imageUrl: "/images/market.jpg",
      comment: "네번째 여행지는 이곳이었습니다.",
      address: "제주도, 대한민국",
    },
    {
      number: "5",
      imageUrl: "/images/image_2.jpg",
      comment: "다섯번째 여행지는 이곳이었습니다.",
      address: "제주도, 대한민국",
    },
    {
      number: "6",
      imageUrl: "/images/room-2.jpg",
      comment: "마지막 여행지는 여기였어요.",
      address: "강원도, 대한민국",
    },
  ];

  const user = {
    name: "홍길동",
    email: "hong@example.com",
    userId: "hong123",
    bio: "여행과 음식 사랑하는 사람입니다.",
  };

  return (
    <div className="book">
      <div className="bookinfo">
        <HTMLFlipBook
          width={450}
          height={550}
          minWidth={300}
          maxWidth={1200}
          minHeight={400}
          maxHeight={1200}
          showCover={true}  // 커버 페이지 사용
          flippingTime={1000}
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
          startPage={0} // 초기 페이지 설정
          size="stretch" // 페이지 크기 설정
          drawShadow={true} // 그림자 그리기 설정
          usePortrait={false} // 세로 모드 사용 여부
          startZIndex={0} // 필수 속성 추가
          autoSize={true} // 필수 속성 추가
          mobileScrollSupport={false} // 필수 속성 추가
          clickEventForward={false} // 필수 속성 추가
          useMouseEvents={true} // 필수 속성 추가
          swipeDistance={50} // 필수 속성 추가
          showPageCorners={true} // 필수 속성 추가
          disableFlipByClick={false} // 필수 속성 추가
        >
          <FirstPageCover></FirstPageCover>
          <PageCover></PageCover>
          {pages.map((page) => (
            <Page key={page.number} number={page.number} user={user.name}>
              <div>
                <img
                  src={page.imageUrl}
                  alt={`Page ${page.number}`}
                  style={{ width: "90%", height: "auto" }}
                />
                <h4>{page.comment}</h4>
                <p>{page.address}</p>
              </div>
            </Page>
          ))}
          <PageCover></PageCover>
          <LastPageCover></LastPageCover>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default TourDiary;
