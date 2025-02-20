import React, { useState } from "react";
import "./css/MyBookshelf.css";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  cover: string;
}

const books: Book[] = [
  { id: 1, title: "Diary 1", cover: "/images/Diarycover.jpg" },
  { id: 2, title: "Diary 2", cover: "/images/Diarycover2.jpg" },
  { id: 3, title: "Diary 3", cover: "/images/Diarycover3.jpg" },
  { id: 4, title: "Diary 4", cover: "/images/Diarycover4.jpg" },
  { id: 5, title: "Diary 5", cover: "/images/Diarycover5.jpg" },
  { id: 6, title: "Diary 6", cover: "/images/Diarycover6.jpg" },
  { id: 7, title: "Diary 7", cover: "/images/Diarycover.jpg" },
  { id: 8, title: "Diary 8", cover: "/images/Diarycover4.jpg" },
  { id: 9, title: "Diary 9", cover: "/images/Diarycover2.jpg" },
];

const MyBookshelf: React.FC = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const renderShelf = (shelfBooks: Book[], isFirstShelf = false) => (
    <div className="shelf">
      <div className="shelfGrid">
        {isFirstShelf && (
          <Link to="/traveler/mydiary/diaryupload" className="addDiaryLink">
            <div className="shelfItem addDiary">
              +
            </div>
          </Link>
        )}

        {shelfBooks.map((book) => (
          <div
            key={book.id}
            className={`shelfItem ${hoveredBook === book.id ? "hoverEffect" : ""}`}
            onMouseEnter={() => setHoveredBook(book.id)}
            onMouseLeave={() => setHoveredBook(null)}
          >
            <Link to={`${book.id}`}>
              <div className="bookCover">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="shelfImage"
                  style={{ boxShadow: "5px 5px 25px rgba(0, 0, 0, 0.5)" }}
                />
                {hoveredBook === book.id && <div className="bookTitle">{book.title}</div>}
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
        <h2>나의 다이어리</h2>
      </div>
      <div className="shelfContainer">
        {renderShelf(books.slice(0, 2), true)} {/* 1층: 다이어리 추가 버튼 + 책 2개 */}
        {renderShelf(books.slice(2, 5))}       {/* 2층: 책 3개 */}
        {renderShelf(books.slice(5, 8))}       {/* 3층: 책 3개 */}
      </div>
    </div>
  );
};

export default MyBookshelf;