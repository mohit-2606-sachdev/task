import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="relative w-3/12">
          <Sidebar />
        </div>
        <div className="px-10 py-5 w-9/12 bg-gray-50">
          <MainSection />
        </div>
      </div>
    </div>
  );
};

export default App;
