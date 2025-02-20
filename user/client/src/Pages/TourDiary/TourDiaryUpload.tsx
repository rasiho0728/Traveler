import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./css/TourDiaryUp.css";
import { useParams } from "react-router-dom";

interface PageCoverProps {
  children?: React.ReactNode;
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
  return (
    <div className="page" ref={ref}>
      <h3 style={{ marginTop: "10px" }}>{props.user} Diary</h3>
      <div className="content">{props.children}</div>
      <div className="page-number">{props.number}</div>
    </div>
  );
});

const TourDiaryUpload: React.FC = () => {
  const [title, setTitle] = useState("");
  const [isBookCreated, setIsBookCreated] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newPage, setNewPage] = useState({ imageUrl: "", comment: "", address: "" });

  const coverOptions = [
    "/images/Diarycover.jpg",
    "/images/Diarycover2.jpg",
    "/images/Diarycover3.jpg",
    "/images/Diarycover4.jpg",
    "/images/Diarycover5.jpg",
    "/images/Diarycover6.jpg",
  ];
  const [selectedCover, setSelectedCover] = useState(coverOptions[0]);

  const [pages, setPages] = useState<{ number: string; imageUrl: string; comment: string; address: string }[]>([]);

  const user = { name: "홍길동" };

  const adjustedPages = pages.length % 2 !== 0 ? [...pages, { number: (pages.length + 1).toString(), imageUrl: "", comment: "", address: "" }] : pages;

  const finalPages = adjustedPages.length === 0
    ? [{ number: "1", imageUrl: "", comment: "아직 페이지가 없습니다.", address: "" },
      { number: "2", imageUrl: "", comment: "아직 페이지가 없습니다.", address: "" }
    ]
    : adjustedPages;

  const handleCreateBook = () => setIsBookCreated(true);

  const handleEditButtonClick = () => setIsEditing(true);
  const handleCancelButtonClick = () => {
    setNewPage({ imageUrl: "", comment: "", address: "" });
    setIsEditing(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPages([...pages, {
      number: (pages.length + 1).toString(),
      imageUrl: newPage.imageUrl,
      comment: newPage.comment,
      address: newPage.address,
    }]);
    setNewPage({ imageUrl: "", comment: "", address: "" });
    setIsEditing(false);
  };

  // 이미지 파일을 읽어 URL로 변환하는 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPage({ ...newPage, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="book-container">
      {!isBookCreated ? (
        <div className="cover-container">
          <div className="title-container">
            <input
              type="text"
              placeholder="다이어리 제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title-input"
            />
          </div>
          <div className="cover-options">
            {coverOptions.map((cover, index) => (
              <div
                key={index}
                className={`cover-item ${selectedCover === cover ? "selected" : ""}`}
                onClick={() => setSelectedCover(cover)}
              >
                <img src={cover} alt={`Cover ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="create-book-button" onClick={handleCreateBook}>생성</button>
        </div>
      ) : (
        <div className={`book ${isEditing ? "editing" : ""}`}>
          <div className="book-box">
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
                  <FirstPageCover />
                  <PageCover />
                  {finalPages.map((page) => (
                    <Page key={page.number} number={page.number} user={user.name}>
                      {page.imageUrl && <img src={page.imageUrl} alt={`Page ${page.number}`} className="page-image" />}
                      <p>{page.address}</p>
                      <h4>{page.comment}</h4>
                    </Page>
                  ))}
                  <PageCover />
                  <LastPageCover />
                </HTMLFlipBook>
              </div>
            </div>
            <div className="diary-btn" style={{ visibility: isEditing ? "hidden" : "visible" }}>
              <button onClick={handleEditButtonClick} className="edit-button">새 페이지 추가</button>
            </div>
          </div>

          {isEditing && (
            <div className="edit-form">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="file"
                  onChange={handleFileChange}
                />
                <input
                  type="text"
                  placeholder="장소"
                  value={newPage.address}
                  onChange={(e) => setNewPage({ ...newPage, address: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="코멘트"
                  value={newPage.comment}
                  onChange={(e) => setNewPage({ ...newPage, comment: e.target.value })}
                />
                <button type="submit">저장</button>
                <button type="button" onClick={handleCancelButtonClick}>취소</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TourDiaryUpload;
