import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const LessonContent = () => {
  const [editorHtml, setEditorHtml] = useState("");

  return (
    <div>
      <p>Lesson Content</p>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={setEditorHtml}
        className="h-56"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        }}
      />
    </div>
  );
};

export default LessonContent;
