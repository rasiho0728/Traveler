import React, { useState } from "react";

interface Location {
  day: string;
  name: string;
  description: string;
}

interface Tour {
  name: string;
  description: string;
  tourPlace: string;
  category: string;
  price: number;
  link: string;
  isBookable: boolean;
  mainImage?: string;
  additionalImages: string[];
  locations: Location[];
}

const TourUpload: React.FC = () => {
  const [newTour, setNewTour] = useState<Tour>({
    name: "",
    tourPlace: "서울",
    description: "",
    category: "beach",
    price: 0,
    link: "",
    isBookable: false,
    mainImage: "",
    additionalImages: [],
    locations: [{ day: "1일차", name: "", description: "" }],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTour((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ 대표 이미지 업로드
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewTour((prev) => ({ ...prev, mainImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ 추가 이미지 업로드
  const handleAdditionalImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewTour((prev) => ({
          ...prev,
          additionalImages: [...prev.additionalImages, reader.result as string],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ 추가 이미지 삭제
  const removeAdditionalImage = (index: number) => {
    setNewTour((prev) => ({
      ...prev,
      additionalImages: prev.additionalImages.filter((_, i) => i !== index),
    }));
  };

  // ✅ 장소 변경
  const handleLocationChange = (index: number, field: keyof Location, value: string) => {
    setNewTour((prev) => {
      const newLocations = [...prev.locations];
      newLocations[index] = { ...newLocations[index], [field]: value };
      return { ...prev, locations: newLocations };
    });
  };

  // ✅ 장소 추가 (최대 20까지)
  const addLocation = () => {
    if (newTour.locations.length < 20) {
      setNewTour((prev) => ({
        ...prev,
        locations: [
          ...prev.locations,
          { day: `${prev.locations.length + 1}일차`, name: "", description: "" },
        ],
      }));
    }
  };

  // ✅ 장소 삭제
  const removeLocation = (index: number) => {
    setNewTour((prev) => ({
      ...prev,
      locations: prev.locations.filter((_, i) => i !== index),
    }));
  };

  const styles: { [key: string]: React.CSSProperties } = {
    imageContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      flexWrap: "wrap",
    },
    uploadBox: {
      position: "relative",
      width: "120px",
      height: "120px",
      border: "2px dashed #ccc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      borderRadius: "8px",
      cursor: "pointer",
    },
    fileInput: {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "pointer",
    },
    imagePreview: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    removeButton: {
      position: "absolute",
      top: "5px",
      right: "5px",
      background: "black",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      cursor: "pointer",
      fontSize: "12px",
    },
    textarea: {
      height: "100px",
      overflowY: "auto",
      resize: "none",
    },
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">새 투어 등록</h1>
      <form>
        {/* 제목 */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">투어 이름</label>
          <input type="text" className="form-control" id="name" name="name" value={newTour.name} onChange={handleInputChange} required />
        </div>
         {/* ✅ 투어 장소 선택 추가 */}
         <div className="mb-3">
          <label className="form-label">투어 장소</label>
          <select className="form-select" name="tourPlace" value={newTour.tourPlace} onChange={handleInputChange} required>
            <option value="서울">서울</option>
            <option value="제주도">제주도</option>
            <option value="부산">부산</option>
            <option value="강원도">강원도</option>
          </select>
        </div>

        {/* 설명 */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">투어 설명</label>
          <textarea className="form-control" id="description" name="description" value={newTour.description} onChange={handleInputChange} style={styles.textarea} required />
        </div>

        {/* ✅ 테마 선택 */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">카테고리</label>
          <select className="form-select" id="category" name="category" value={newTour.category} onChange={handleInputChange} required>
            <option value="beach">바다</option>
            <option value="indoor">실내 여행지</option>
            <option value="activity">액티비티</option>
            <option value="culture-history">문화/역사</option>
            <option value="theme-park">테마파크</option>
            <option value="food">맛집</option>
          </select>
        </div>

        {/* ✅ 대표 이미지 업로드 */}
        <div className="mb-3">
          <label className="form-label">대표 이미지</label>
          <div style={styles.imageContainer}>
            <div style={styles.uploadBox}>
              <input
                type="file"
                style={styles.fileInput}
                accept="image/*"
                onChange={handleImageUpload}
              />
              {newTour.mainImage ? (
                <img src={newTour.mainImage} alt="대표 이미지" style={styles.imagePreview} />
              ) : (
                <span>+</span>
              )}
            </div>

            {/* 추가 이미지 업로드 */}
            {newTour.additionalImages.map((image, index) => (
              <div key={index} style={styles.uploadBox}>
                <img src={image} alt={`추가 이미지 ${index + 1}`} style={styles.imagePreview} />
                <button
                  style={styles.removeButton}
                  type="button"
                  onClick={() => removeAdditionalImage(index)}
                >
                  ×
                </button>
              </div>
            ))}

            {/* 추가 이미지 추가 버튼 */}
            {newTour.additionalImages.length < 5 && (
              <div style={styles.uploadBox}>
                <input
                  type="file"
                  style={styles.fileInput}
                  accept="image/*"
                  onChange={handleAdditionalImageUpload}
                />
                <img src="../../imgs/plus-icon.png" alt="추가하기" style={{ width: "70px", height: "40px" }} />
              </div>
            )}
          </div>
        </div>

        {/* 📌 스케줄 추가 */}
        <div className="mb-3">
          {newTour.locations.map((location, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <select className="form-select mb-2" value={location.day} onChange={(e) => handleLocationChange(index, "day", e.target.value)}>
                  {["1일차", "2일차", "3일차", "4일차", "5일차"].map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <input type="text" className="form-control mb-2" placeholder="장소 이름" value={location.name} onChange={(e) => handleLocationChange(index, "name", e.target.value)} />
                <textarea className="form-control mb-2" placeholder="장소 설명" value={location.description} onChange={(e) => handleLocationChange(index, "description", e.target.value)} style={styles.textarea} />
                <button type="button" className="btn btn-danger" onClick={() => removeLocation(index)}>삭제</button>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={addLocation}>+ 스케줄 추가</button>
        </div>

        <button type="submit" className="btn btn-success">투어 등록</button>
      </form>
    </div>
  );
};

export default TourUpload;
