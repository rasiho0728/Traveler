import React from "react";
import { chatAppData } from "../../components/Data/AppData";
import BagTalk from "../../components/Dashboard/BagTalk";

const Talk: React.FC = () => {
  return (
    <div className="container-xxl">
      <div className="row clearfix g-3">
        <BagTalk data={chatAppData} />
      </div>
    </div>
  )

}

export default Talk;