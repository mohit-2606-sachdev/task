import React, { useEffect, useState } from "react";
import AddMoreInCourse from "./AddMoreInCourse";
import { useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";

const Sidebar = () => {
  const course = useSelector((state) => state.courseReducer.course);
  const [showThemes, setShowThemes] = useState([]);

  useEffect(() => {
    handleThemes();
  }, [course]);

  const handleThemes = () => {
    const value =
      course.themes &&
      course.themes.map((ele, index) => {
        return (
          <details key={index} className="">
            <summary className="flex justify-between cursor-pointer px-14 py-2 text-lg hover:bg-gray-50">
              <span>Theme {index + 1}</span>
              <button>
                {" "}
                <CiCirclePlus />{" "}
              </button>
            </summary>
            <ul className="">
              {ele.lessons &&
                ele.lessons.map((lesson, index2) => {
                  return (
                    <li
                      className="cursor-pointer px-[80px] text-lg py-2 hover:bg-gray-50"
                      key={index2}
                    >
                      Lesson {index2 + 1}
                    </li>
                  );
                })}
            </ul>
          </details>
        );
      });
    setShowThemes(value);
  };

  return (
    <div className=" py-4 border h-[500px] flex flex-col justify-between">
      <details>
        <summary className="flex cursor-pointer hover:bg-gray-50 text-lg px-10 py-2">
          <span>Course</span>
        </summary>
        {showThemes}
      </details>
      <div>
        <hr />
        <div className="ms-10">
          <AddMoreInCourse />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
