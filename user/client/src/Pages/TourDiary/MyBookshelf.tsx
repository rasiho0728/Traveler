import React, { useEffect, useState } from "react";
import "./css/MyBookshelf.css";
import { Link } from "react-router-dom";
import axios from "axios";

interface Diary {
  num: number;
  title: string;
  thumbnail: string;
  isshare: number;
  hit: number;
  heart: number;
  ddate: string;
  diaryPage: {
    num: number;
    page: number;
    ptitle: string;
    content: string;
    location: string;
    happy: number;
    upset: number;
    embressed: number;
    sad: number;
    neutrality: number;
  };
}

const MyBookshelf: React.FC = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [allPosts, setAllPosts] = useState<Diary[]>([]); // 전체 게시글
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const [currentPage, setCurrentPage] = useState(1); // 기본 1값을 초기화
  const [check, setCheck] = useState(false); // 검색 버튼 동작 감지

  const DiaryList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_END_URL}/api/diary/list`
      );
      console.log(response.data);
      setAllPosts(response.data); // 전체 게시글
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.log("Error Message: " + error);
    }
  };

  useEffect(() => {
    DiaryList();
  }, [currentPage, check]);

  // 3개씩 배열을 나누는 함수
  const chunkArray = (array: Diary[], size: number) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  // 다이어리를 3개씩 나눈 배열 생성
  const diaryChunks = chunkArray(allPosts, 3);

  const renderShelf = (shelfBooks: Diary[], isFirstShelf = false) => (
    <div className="shelf">
      <div className="shelfGrid">
        {/* 첫 번째 칸에만 다이어리 추가 버튼과 두 개의 다이어리 항목을 표시 */}
        {isFirstShelf && (
          <>
            <Link to="/traveler/mydiary/diaryupload" className="addDiaryLink">
              <div className="shelfItem addDiary">+</div>
            </Link>
            {shelfBooks.slice(0, 2).map((diary) => (
              <div
                key={diary.num}
                className={`shelfItem ${hoveredBook === diary.num ? "hoverEffect" : ""}`}
                onMouseEnter={() => setHoveredBook(diary.num)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <Link to={`${diary.num}`}>
                  <div className="bookCover">
                    <img
                      src={`/images/${diary.thumbnail}`}
                      alt={diary.title}
                      className="shelfImage"
                      style={{ boxShadow: "5px 5px 25px rgba(0, 0, 0, 0.5)" }}
                    />
                    {hoveredBook === diary.num && <div className="bookTitle">{diary.title}</div>}
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}

        {/* 그 이후에는 3개씩 다이어리 항목을 표시 */}
        {!isFirstShelf &&
          shelfBooks.map((diary) => (
            <div
              key={diary.num}
              className={`shelfItem ${hoveredBook === diary.num ? "hoverEffect" : ""}`}
              onMouseEnter={() => setHoveredBook(diary.num)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <Link to={`${diary.num}`}>
                <div className="bookCover">
                  <img
                    src={`/images/${diary.thumbnail}`}
                    alt={diary.title}
                    className="shelfImage"
                    style={{ boxShadow: "5px 5px 25px rgba(0, 0, 0, 0.5)" }}
                  />
                  {hoveredBook === diary.num && <div className="bookTitle">{diary.title}</div>}
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="woodenShelf"></div>
    </div>
  );

  return (
    <div className="bookshelf" style={{ paddingTop: "170px" }}>
      <div className="titlebox" style={{ paddingTop: "90px" }}>
        <h2>공유 다이어리</h2>
      </div>
      <div className="shelfContainer">
        {/* 첫 번째 줄에는 업로드 버튼과 두 개의 다이어리 */}
        {diaryChunks.length > 0 && renderShelf(diaryChunks[0], true)}

        {/* 두 번째, 세 번째 줄에는 각각 3개의 다이어리 */}
        {diaryChunks.slice(1).map((chunk, index) => (
          <React.Fragment key={index}>{renderShelf(chunk)}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MyBookshelf;
