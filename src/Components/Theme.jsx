import React, { useState } from "react";
import { GoImage } from "react-icons/go";
import Lesson from "./Lesson";
import AddMoreInTheme from "./AddMoreInTheme";
import { useDispatch } from "react-redux";
import { deleteTheme } from "../features/CourseSlice/CourseSlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import FileUpload from "./FileUpload";

const Theme = ({ detail, index }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState({
    product_type: "",
  });

  const handleSelectChange = (e) => {
    console.log(e.target.name, e.target.value);
    setSelected((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <div className="border rounded-lg p-4 mt-7 bg-white">
        <div className="flex justify-between">
          <h4 className="text-2xl">Theme {index + 1}</h4>
          <div className="flex justify-around p-1">
            <div className="px-3 border-e">
              <FaRegStar className="inline-block mb-1" /> 10 pts
            </div>
            <div className="px-3 text-red-400">
              <button
                className="rounded-xl px-2 border"
                onClick={() => dispatch(deleteTheme(index))}
              >
                <MdOutlineDeleteForever className="inline-block mb-1" /> Delete
                Theme
              </button>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex">
          <div className="w-6/12 border-e">
            <div class="relative me-3 mb-3">
              <input
                type="text"
                id="title"
                class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-200 appearance-none    focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                for="title"
                class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Title
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2 me-3">
              <div class="relative">
                <input
                  type="number"
                  id="leadership_point2"
                  class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-200 appearance-none    focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  for="leadership_point2"
                  class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Leaderboard Points
                </label>
              </div>
              <div class="relative">
                <input
                  type="number"
                  id="order_in_the_course"
                  class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-200 appearance-none    focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  for="order_in_the_course"
                  class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Order In The Course
                </label>
              </div>
            </div>

            <div className="relative mt-3 me-3">
              <select
                id="product_type"
                className=" rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border border-gray-200 appearance-none focus:outline-none focus:ring-0 peer"
                onChange={handleSelectChange}
                name="product_type"
              >
                <option defaultValue="" hidden className="text-gray-500">
                  Product Type
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {selected.product_type == "" ? (
                ""
              ) : (
                <label
                  htmlFor="product_type"
                  className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 
           `}
                >
                  Product Type
                </label>
              )}
            </div>
          </div>
          <div className="w-6/12 p-4">
            <div className="flex py-1">
              <div className="w-3/12 mx-2">
                {uploadedImage ? (
                  <div className="h-28 flex justify-center items-center text-gray-400 text-4xl">
                    <img
                      src={URL.createObjectURL(uploadedImage)}
                      alt="Uploaded"
                      style={{ maxWidth: "100%", marginTop: "20px" }}
                    />
                  </div>
                ) : (
                  <div className="h-28 flex justify-center items-center text-gray-400 text-4xl">
                    <GoImage />
                  </div>
                )}
              </div>
              <div>
                <div>
                  <h4 className="text-xl">Overview Picture</h4>
                  <p className="text-sm">
                    Minimal resolution: 343x193px <br /> Maximum size: 5 mb{" "}
                  </p>
                </div>
                <div className="mt-3">
                  <FileUpload setUploadedImage={setUploadedImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {detail.lessons &&
        detail.lessons.map((ele, lessonIndex) => {
          return (
            <div key={lessonIndex}>
              <Lesson
                lessonDetail={ele}
                lessonIndex={lessonIndex}
                themeIndex={index}
              />
            </div>
          );
        })}

      <div>
        <AddMoreInTheme themeIndex={index} />
      </div>
    </div>
  );
};

export default Theme;
