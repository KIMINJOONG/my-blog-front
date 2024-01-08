"use client";
import QuillNoSSRWrapper from "@/components/QuillNoSSRWrapper";
import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
  "code",
];

const EditorComponent = () => {
  const quillInstance = useRef<ReactQuill>(null);
  const [contents, setContents] = useState<string>();

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      console.log("드ㄹ어옴");
      if (quillInstance && quillInstance.current) {
        if (input.files) {
          const file = input.files[0];

          try {
            // const res = await imageApi({ img: file });
            // const imgUrl = res.data.imgUrl;
            // const editor = quillInstance.current.getEditor();
            // const range = editor.getSelection();
            // if (range !== null) {
            //   editor.insertEmbed(range.index, "image", imgUrl);
            //   editor.setSelection(range.index + 1);
            // }
          } catch (error) {
            console.log(error);
          }
        }
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["link", "image", "video"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
        handlers: { image: imageHandler },
      },
      // imageCompress: {
      //   quality: 1,
      //   debug: true, // default
      //   suppressErrorLogging: false,
      //   insertIntoEditor: undefined,

      // },
      imageResize: {
        modules: ["Resize", "DisplaySize"],
      },
    }),
    []
  );

  return (
    <QuillNoSSRWrapper
      forwardedRef={quillInstance}
      value={contents}
      onChange={(e) => setContents(e)}
      modules={modules}
      theme="snow"
      placeholder="내용을 입력해주세요."
      formats={formats}
    />
  );
};

export default EditorComponent;
