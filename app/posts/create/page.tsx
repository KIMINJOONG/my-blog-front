"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Header from "@/components/Header";

const CreatePost = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <>
      <Header />

      <EditorContent editor={editor} />
    </>
  );
};

export default CreatePost;
