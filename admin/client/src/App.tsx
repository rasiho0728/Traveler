import React from "react";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";


function App(props: any) {
  const activekey = () => {
    let res = window.location.pathname

    const baseUrl = process.env.REACT_APP_BASE_URL
    const baseUrlList = baseUrl?.split("/");
    let resList = res.split("/");
    if (!baseUrlList) return
    res = res.length > 0 ? resList[baseUrlList.length] : "/";
    res = res ? "/" + res : "/";;
    const activeKey1 = res;
    return activeKey1
  }
  console.log(`${activekey()}`)
  return (
    <div id="mytask-layout" className="theme-indigo">
      <Sidebar activekey={activekey()} />
      <MainIndex />
    </div>
  );
}

export default App;
