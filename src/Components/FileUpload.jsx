import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import Input from "@mui/material/Input";

const FileUpload = ({ setSelectedFile, setImageDataUrl }) => {
  const handleButtonClick = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        setImageDataUrl(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <button onClick={handleButtonClick}>
          {" "}
          <MdOutlineFileUpload className="inline-block text-xl mb-1" />
          Choose File
        </button>
      </label>
    </div>
  );
};

export default FileUpload;
