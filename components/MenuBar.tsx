import { Editor } from "@tiptap/react";
import { useCallback } from "react";

interface IProps {
  editor: Editor | null;
}
const MenuBar = ({ editor }: IProps) => {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <button onClick={addImage}>setImage</button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={
          editor.isActive("code")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
      >
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? "mr-3 text-white border-2 border-black bg-black rounded"
            : "mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "p-1 mb-2 mr-3 text-white border-2 border-black bg-black rounded"
            : "p-1 mb-2 mr-3 text-black border-2 border-black bg-white rounded"
        }
      >
        purple
      </button>
    </>
  );
};

export default MenuBar;
