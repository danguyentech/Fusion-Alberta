import "./stylesheets/admin.css"
import React from "react"
import ReactDOM from "react-dom"
import adminText from "./components/admin/AdminText"
import Logo from "./components/Logo"
import Annotation from "./components/Annotation"
import AdminNav from "./components/AdminNav"
import Dropdown from "./components/Dropdown"
import Filter from "./components/Filter"
import { useState, useEffect } from "react"
import AdminModal from "./components/admin/AdminModal"
import AdminText from "./components/admin/AdminText"



const App = () => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [fuzeFull, setFuzeFull] = useState([])

  useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Sandbox/nextSevenDays")
      let fuze = await response.json()
      setFuzeFull(fuze)
    }
    getSandbox()
  }, [])

  return (
    <div className="adminPage">
      <AdminNav />
      <Logo />
      {/* <AdminText /> */}
       <AdminText />
      {/* <Dropdown updateFilter={setCurrentFilters} />
      <Filter
        filters={currentFilters}
        fuzeFull={fuzeFull}
        setFuzeFull={setFuzeFull}
      />
      <Annotation fuzeFull={fuzeFull} setFuzeFull={setFuzeFull} />
       <AdminModal />  */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
