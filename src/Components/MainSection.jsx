import React from "react";
import CourseInformation from "./CourseInformation";
import Theme from "./Theme";
import AddMoreInCourse from "./AddMoreInCourse";
import { useSelector } from "react-redux";

const MainSection = () => {
  const themes = useSelector((state) => state.courseReducer.course.themes);

  return (
    <div>
      <CourseInformation />
      {themes.map((ele, index) => {
        return (
          <div key={index + 1} className="">
            <Theme detail={ele} index={index} />
          </div>
        );
      })}
      <AddMoreInCourse />
    </div>
  );
};

export default MainSection;
