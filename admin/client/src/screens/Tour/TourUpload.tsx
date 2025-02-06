import React, { useState } from "react";

const TourUpload: React.FC = () => {
  const [newTour, setNewTour] = useState({
    name: "",
    description: "",
    category: "",
    startDate: "",
    endDate: "",
    price: 0,
    isBookable: true,
    mainImage: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTour((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("새 투어 데이터:", newTour);
    setNewTour({
      name: "",
      description: "",
      category: "",
      startDate: "",
      endDate: "",
      price: 0,
      isBookable: true,
      mainImage: "",
    });
  };

  return (
    <div className="container mt-4">
      <h1>새 투어 등록</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">투어 이름</label>
          <input type="text" name="name" className="form-control" value={newTour.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">설명</label>
          <textarea name="description" className="form-control" value={newTour.description} onChange={handleInputChange} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">카테고리</label>
          <select name="category" className="form-select" value={newTour.category} onChange={handleInputChange} required>
            <option value="">카테고리 선택</option>
            <option value="culture">문화</option>
            <option value="nature">자연</option>
            <option value="history">역사</option>
            <option value="activity">액티비티</option>
          </select>
        </div>
        <div className="d-flex gap-3">
          <div className="mb-3 flex-grow-1">
            <label className="form-label">시작 날짜</label>
            <input type="date" name="startDate" className="form-control" value={newTour.startDate} onChange={handleInputChange} required />
          </div>
          <div className="mb-3 flex-grow-1">
            <label className="form-label">종료 날짜</label>
            <input type="date" name="endDate" className="form-control" value={newTour.endDate} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">가격</label>
          <input type="number" name="price" className="form-control" value={newTour.price} onChange={handleInputChange} required />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" name="isBookable" className="form-check-input" checked={newTour.isBookable} onChange={(e) => setNewTour((prev) => ({ ...prev, isBookable: e.target.checked }))} />
          <label className="form-check-label">예약 가능</label>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-success">등록</button>
        </div>
      </form>
    </div>
  );
};

export default TourUpload;
