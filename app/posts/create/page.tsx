"use client";
import QuillNoSSRWrapper from "@/components/QuillNoSSRWrapper";
import axios from "axios";
import { useCallback, useMemo, useRef, useState } from "react";
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
            const form = new FormData();
            form.append("images", file);
            const result = await axios.post(
              "http://localhost:4000/images/upload",
              form,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            if (result) {
              // const res = await imageApi({ img: file });
              // const imgUrl = res.data.imgUrl;
              for (const imageUrl of result.data) {
                const editor = quillInstance.current.getEditor();
                const range = editor.getSelection();
                if (range !== null) {
                  editor.insertEmbed(
                    range.index,
                    "image",
                    `https://kohubi-new-blog.s3.ap-northeast-2.amazonaws.com/${imageUrl}`
                  );
                  editor.setSelection(range.index + 1);
                }
              }
            }
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

  const onSubmit = useCallback(async () => {
    try {
      await axios.post("http://localhost:4000/posts", {
        title: "제목",
        content: contents,
      });
    } catch (e) {}
  }, [contents]);

  return (
    <section className={"pt-52 pb-24"}>
      <div onClick={onSubmit}>
        <p>등록</p>
      </div>
      <QuillNoSSRWrapper
        forwardedRef={quillInstance}
        value={contents}
        onChange={(e) => setContents(e)}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
        formats={formats}
      />
    </section>
  );
};

export default EditorComponent;
