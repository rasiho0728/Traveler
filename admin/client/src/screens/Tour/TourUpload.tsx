import type React from "react"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"

interface Location {
  name: string
  description: string
  image?: string
}

interface Tour {
  name: string
  description: string
  category: string
  startDate: Date
  endDate: Date
  price: number
  isBookable: boolean
  mainImage?: string
  additionalImages: string[]
  locations: Location[]
}

const TourUpload: React.FC = () => {
  const [newTour, setNewTour] = useState<Tour>({
    name: "",
    description: "",
    category: "",
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    isBookable: false,
    mainImage: "",
    additionalImages: [],
    locations: [],
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewTour((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, field: "startDate" | "endDate") => {
    setNewTour((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: "mainImage" | "additionalImages") => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (field === "mainImage") {
          setNewTour((prev) => ({ ...prev, mainImage: reader.result as string }))
        } else {
          setNewTour((prev) => ({ ...prev, additionalImages: [...prev.additionalImages, reader.result as string] }))
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleLocationChange = (index: number, field: keyof Location, value: string) => {
    setNewTour((prev) => {
      const newLocations = [...prev.locations]
      newLocations[index] = { ...newLocations[index], [field]: value }
      return { ...prev, locations: newLocations }
    })
  }

  const handleLocationImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewTour((prev) => {
          const newLocations = [...prev.locations]
          newLocations[index] = { ...newLocations[index], image: reader.result as string }
          return { ...prev, locations: newLocations }
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const addLocation = () => {
    setNewTour((prev) => ({
      ...prev,
      locations: [...prev.locations, { name: "", description: "", image: "" }],
    }))
  }

  const removeLocation = (index: number) => {
    setNewTour((prev) => ({
      ...prev,
      locations: prev.locations.filter((_, i) => i !== index),
    }))
  }

  const styles = {
    squareUpload: {
      position: "relative" as const,
      width: "200px",
      height: "200px",
      border: "2px dashed #ccc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    fileInput: {
      position: "absolute" as const,
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "pointer",
    },
    imgPreview: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "cover" as const,
    },
  }

  return (
    <div>
      {/* Tour Upload Form */}
      <div className="container mt-5">
        <h1 className="mb-4">새 투어 등록</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              투어 이름
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newTour.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              투어 설명
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={newTour.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              카테고리
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={newTour.category}
              onChange={handleInputChange}
              required
            >
              <option value="">카테고리 선택</option>
              <option value="culture">문화</option>
              <option value="nature">자연</option>
              <option value="history">역사</option>
              <option value="activity">액티비티</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              1인당 가격 (원)
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={newTour.price}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isBookable"
              name="isBookable"
              checked={newTour.isBookable}
              onChange={(e) => setNewTour((prev) => ({ ...prev, isBookable: e.target.checked }))}
            />
            <label className="form-check-label" htmlFor="isBookable">
              예약 가능 여부
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="mainImage" className="form-label">
              대표 이미지
            </label>
            <div style={styles.squareUpload}>
              <input
                type="file"
                style={styles.fileInput}
                id="mainImage"
                name="mainImage"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "mainImage")}
              />
              {newTour.mainImage && (
                <img src={newTour.mainImage || "/placeholder.svg"} alt="Main" style={styles.imgPreview} />
              )}
            </div>
          </div>

          <div className="mb-3">
            {/* <label htmlFor="additionalImages" className="form-label">
              추가 이미지
            </label>
            <div style={styles.squareUpload}>
              <input
                type="file"
                style={styles.fileInput}
                id="additionalImages"
                name="additionalImages"
                accept="image/*"
                multiple
                onChange={(e) => handleImageUpload(e, "additionalImages")}
              />
            </div> */}
            <div className="row mt-2">
              {newTour.additionalImages.map((img, index) => (
                <div key={index} className="col-md-3 mb-2">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Additional ${index + 1}`}
                    className="img-thumbnail"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <button type="button" className="btn btn-primary mb-2" onClick={addLocation}>
              장소 추가
            </button>
            {newTour.locations.map((location, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="장소 이름"
                    value={location.name}
                    onChange={(e) => handleLocationChange(index, "name", e.target.value)}
                  />
                  <textarea
                    className="form-control mb-2"
                    placeholder="장소 설명"
                    value={location.description}
                    onChange={(e) => handleLocationChange(index, "description", e.target.value)}
                  />
                  <div style={styles.squareUpload} className="mb-2">
                    <input
                      type="file"
                      style={styles.fileInput}
                      accept="image/*"
                      onChange={(e) => handleLocationImageUpload(e, index)}
                    />
                    {location.image && (
                      <img src={location.image || "/placeholder.svg"} alt={location.name} style={styles.imgPreview} />
                    )}
                  </div>
                  <button type="button" className="btn btn-danger" onClick={() => removeLocation(index)}>
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              투어 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TourUpload

