import React from "react";
import Header from "./components/Header/Header";
import JobGrid from "./components/JobGrid/JobGrid";
import JobList from "./components/JobList/JobList";

import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-4 flex-grow">
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default App;
