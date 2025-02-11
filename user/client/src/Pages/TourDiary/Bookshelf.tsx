import React, { useState } from "react";
import "./Bookshelf.css"; // CSS import
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

const Bookshelf: React.FC = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const renderShelf = (shelfBooks: Book[]) => (
    <div className="shelf">
      <div className="shelfGrid">
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
                style={{boxShadow : "5px 5px 25px rgba(0, 0, 0, 0.5)"}}
              />
              {/* 타이틀 표시 부분 */}
              {hoveredBook === book.id && (
                <div className="bookTitle">{book.title}</div>
              )}
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="woodenShelf"></div>
    </div>
  );

  return (
    <div className="bookshelf" style={{ paddingTop: "100px" }}>
      <div className="shelfContainer">
        {renderShelf(books.slice(0, 3))}
        {renderShelf(books.slice(3, 6))}
        {renderShelf(books.slice(6, 9))}
      </div>
    </div>
  );
};

export default Bookshelf;