import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList/JobList";
import JobGrid from "./components/JobGrid/JobGrid";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area: Header and Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <div className="flex-grow p-6 bg-gray-900 text-white overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/job-list"
          element={
            <Layout>
              <JobList />
            </Layout>
          }
        />
        <Route
          path="/job-grid"
          element={
            <Layout>
              <JobGrid />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <JobList />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
