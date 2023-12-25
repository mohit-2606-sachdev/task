import React, { useState } from "react";
import { GoImage } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { Switch } from "@mui/material";
import FileUpload from "./FileUpload";

const CourseInformation = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [selected, setSelected] = useState({
    category: "",
    level: "",
    product_type: "",
    language: "",
    certificate: "",
  });

  const handleSelectChange = (e) => {
    console.log(e.target.name, e.target.value);
    setSelected((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex justify-between">
        <h4 className="text-2xl">Course Information</h4>
        <div className="flex justify-around p-1">
          <div className="px-3 border-e">
            <MdOutlineTimer className="inline-block mb-1" /> 0h 0m
          </div>
          <div className="px-3 border-e">
            <FaRegStar className="inline-block mb-1" /> 10 pts
          </div>
          <div className="px-3">
            Inactive
            <Switch size="small" inputProps={{ "aria-label": "controlled" }} />
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex">
        <div className="w-6/12 border-e">
          <div class="relative me-3 mb-3">
            <input
              type="text"
              id="name"
              class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-200 appearance-none    focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              for="name"
              class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Course Name
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2 me-3 ">
            <div class="relative">
              <input
                type="number"
                id="duration"
                class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-200 appearance-none    focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                for="duration"
                class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Duration
              </label>
            </div>
            <div class="relative">
              <input
                type="number"
                id="leadership_point"
                class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-200 appearance-none    focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                for="leadership_point"
                class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Leaderboard Points
              </label>
            </div>
            <div className="relative">
              <select
                id="category"
                className="rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border border-gray-200 appearance-none focus:outline-none focus:ring-0 peer"
                onChange={handleSelectChange}
                name="category"
              >
                <option defaultValue="" hidden className="text-gray-500">
                  Category
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {selected.category == "" ? (
                ""
              ) : (
                <label
                  htmlFor="category"
                  className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 
           `}
                >
                  Category
                </label>
              )}
            </div>

            <div className="relative">
              <select
                id="level"
                className=" rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border border-gray-200 appearance-none focus:outline-none focus:ring-0 peer"
                onChange={handleSelectChange}
                name="level"
              >
                <option defaultValue="" hidden className="text-gray-500">
                  Level
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {selected.level == "" ? (
                ""
              ) : (
                <label
                  htmlFor="level"
                  className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 
           `}
                >
                  Level
                </label>
              )}
            </div>

            <div className="relative">
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

            <div className="relative">
              <select
                id="language"
                className=" rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border border-gray-200 appearance-none focus:outline-none focus:ring-0 peer"
                onChange={handleSelectChange}
                name="language"
              >
                <option defaultValue="" hidden className="text-gray-500">
                  Language
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {selected.language == "" ? (
                ""
              ) : (
                <label
                  htmlFor="language"
                  className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 
           `}
                >
                  Language
                </label>
              )}
            </div>
          </div>

          <div className="relative me-3 mt-3">
            <select
              id="certificate"
              className=" rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border border-gray-200 appearance-none focus:outline-none focus:ring-0 peer"
              onChange={handleSelectChange}
              name="certificate"
            >
              <option defaultValue="" hidden className="text-gray-500">
                Certificate
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {selected.certificate == "" ? (
              ""
            ) : (
              <label
                htmlFor="certificate"
                className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 
           `}
              >
                Certificate
              </label>
            )}
          </div>
        </div>
        <div className="w-6/12 p-4">
          <div className="flex py-1">
            <div className="w-3/12 mx-2">
              {imageDataUrl ? (
                <div className="h-28 flex justify-center items-center text-gray-400 text-4xl">
                  <img
                    src={imageDataUrl}
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
                <FileUpload
                  setSelectedFile={setSelectedFile}
                  setImageDataUrl={setImageDataUrl}
                />
              </div>
            </div>
          </div>

          <div className="p-2 border rounded-lg mt-2">
            <div class="relative z-0">
              <textarea
                name=""
                id="description"
                cols="30"
                rows="2"
                class="block py-4  px-0 w-full text-sm text-gray-900 bg-transparent border-gray-300 appearance-none  focus:outline-none focus:ring-0 peer"
              ></textarea>
              <label
                for="description"
                class="absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Description
              </label>
            </div>
          </div>

          <div className="p-2 border rounded-lg mt-2">
            <div class="relative z-0">
              <textarea
                name=""
                id="info_at_end"
                cols="30"
                rows="2"
                class="block py-4  px-0 w-full text-sm text-gray-900 bg-transparent border-gray-300 appearance-none  focus:outline-none focus:ring-0 peer"
              ></textarea>
              <label
                for="info_at_end"
                class="absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Information At Course End
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInformation;
