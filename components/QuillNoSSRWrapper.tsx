"use client";
import dynamic from "next/dynamic";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import("react-quill");
    // 해당 라이브러리 dynamic import
    const { default: ImageCompress } = await import("quill-image-compress");
    const { default: ImageResize } = await import(
      "quill-image-resize-module-react"
    );
    // Quill에 모듈 등록
    QuillComponent.Quill.register("modules/imageCompress", ImageCompress);
    QuillComponent.Quill.register("modules/imageResize", ImageResize);
    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} />
    );
    return Quill;
  },
  { loading: () => <div>...loading</div>, ssr: false }
);

export default QuillNoSSRWrapper;
