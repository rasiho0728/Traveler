import React from 'react'
import ImgCarousel from '../Comm/ImgCarousel'

const Test: React.FC = () => {
    return (
        <div>
            <div className="col-md-12 ftco-animate">
                <ImgCarousel data = {[1,2,3]}/>
            </div>
        </div>
    )
}

export default Test