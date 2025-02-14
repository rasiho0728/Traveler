import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./TourDiaryUp.css";
import { useParams } from "react-router-dom";

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

const FirstPageCover = React.forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {
  return (
    <div className="firstcover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const LastPageCover = React.forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {
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
  const { id } = useParams<{ id: string }>();

  return (
    <div className="page" ref={ref}>
      <h3 style={{ marginTop: "10px" }}>{props.user} Diary</h3>
      <div className="content">{props.children}</div>
      <div className="page-number">{props.number}</div>
    </div>
  );
});

const MyDiary: React.FC = () => {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("내용 입력");

  // 각 페이지별 더미데이터
  const pages = [
    {
        number: "1",
        imageUrl: "/images/dog1.jpg",
        comment: "강아지가 귀엽다.",
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
    {
      number: "7",
      imageUrl: "/images/room-2.jpg",
      comment: "마지막 여행지는 여기였어요.",
      address: "강원도, 대한민국",
    },
  ];

  // 페이지 수가 홀수일 경우 마지막에 빈 페이지 추가
  const adjustedPages = pages.length % 2 !== 0 ? [...pages, { number: (pages.length + 1).toString(), imageUrl: "", comment: "", address: "" }] : pages;

  const [isEditing, setIsEditing] = useState(false);  // 수정 상태 관리
  const [newPage, setNewPage] = useState({
    imageUrl: "",
    comment: "",
    address: "",
  }); // 새 페이지에 대한 상태 관리

  const handleEditButtonClick = () => {
    setIsEditing(true);  // 수정 모드로 전환
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPages = [
      ...adjustedPages,
      {
        number: (adjustedPages.length + 1).toString(),
        imageUrl: newPage.imageUrl,
        comment: newPage.comment,
        address: newPage.address,
      },
    ];
    setNewPage({ imageUrl: "", comment: "", address: "" });  // 입력 필드 초기화
    setIsEditing(false);  // 수정 모드 종료
    // 새로운 페이지가 추가된 배열을 설정
    // setPages(updatedPages);
  };

  const user = {
    name: "홍길동",
    email: "hong@example.com",
    userId: "hong123",
    bio: "여행과 음식 사랑하는 사람입니다.",
  };

  const handleCancelButtonClick = () => {
    // 취소 시 입력 필드 초기화하고 수정 모드 종료
    setNewPage({ imageUrl: "", comment: "", address: "" });
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div className={`book ${isEditing ? "editing" : ""}`}>
      {/* 'box' div로 감싸기 */}
      <div className="box">
        <div className="bookinfo">
          <HTMLFlipBook
            width={450}
            height={550}
            minWidth={300}
            maxWidth={1200}
            minHeight={400}
            maxHeight={1200}
            showCover={true}
            flippingTime={1000}
            style={{ margin: "0 auto" }}
            maxShadowOpacity={0.5}
            className="album-web"
            startPage={0}
            size="stretch"
            drawShadow={true}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            mobileScrollSupport={false}
            clickEventForward={false}
            useMouseEvents={true}
            swipeDistance={50}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            <FirstPageCover></FirstPageCover>
            <PageCover></PageCover>
            {adjustedPages.map((page) => (
              <Page key={page.number} number={page.number} user={user.name}>
                <div>
                  {page.imageUrl ? (
                    <img
                      src={page.imageUrl}
                      alt={`Page ${page.number}`}
                      style={{
                        width: "90%",
                        height: "auto",
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <div style={{ textAlign: "center", padding: "50px" }}>
                    </div>
                  )}
                  <p style={{ marginTop: "5px" }}>{page.address}</p>
                  <h4 style={{ marginTop: "15px" }}>{page.comment}</h4>
                </div>
              </Page>
            ))}
            <PageCover></PageCover>
            <LastPageCover></LastPageCover>
          </HTMLFlipBook>
        </div>
      </div>


  </div>
  );
};

export default MyDiary;