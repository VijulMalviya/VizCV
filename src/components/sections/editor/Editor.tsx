import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { dummyResume } from "@/constant";
import { useDispatch, useSelector } from "react-redux";
import { setCvContent } from "@/redux/slice/resumeParseContentSlice";


const TinyMCEEditor = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const cvContent = useSelector(
    (state: any) => state.resumeParseContent.cvContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setEditorLoaded(true);
    }, 500);
  }, []);

  return (
    <>
      <Box height="100%" sx={{ position: "relative" }}>
        <Box
          className="loader"
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            display: !editorLoaded ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999",
          }}
        >
          <CircularProgress color="warning" />
        </Box>

        <Editor
          id="tinymce-editor"
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_EDITOR_LICENSE_KEY}
          onInit={(evt, editor) => {
            const initialEditorContent = editor.getContent({
              format: "html",
            });
            dispatch(setCvContent(initialEditorContent));

            editor.on("blur", function () {
              const updatedContent = editor.getContent({ format: "html" });
              dispatch(setCvContent(updatedContent));
            });
          }}
          init={{
            element_format: "html",
            extended_valid_elements:
              "html[*], body[*], head, style[*], title[*], meta[*], link[*], script[*], p[*]",
            height: "100%",
            width: "100%",
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "fullpage",
            ],
            cleanup: false,
            invalid_elements: "script,applet,iframe",
            valid_children:
              "+body[style],+body[link],+div[style],+p[style],+*[*]",
            valid_elements:
              "ul[*],li[*],table[*],tr[*],td[*],th[*],p[*],h1[*],h2[*],h3[*],img[*],mark[*],div[*],h3[*],style[*]",
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | downloadDocxButton | downloadPDFButton",
          }}
          initialValue={cvContent || dummyResume}
        />
        <Typography
          textAlign="end"
          sx={{
            textShadow: "0.7px 0.7px 0.7px rgb(0 0 0 / 21%)",
          }}
          className="content"
        >
          <small>SnapCode can make mistakes.</small>
        </Typography>
      </Box>
    </>
  );
};

export default TinyMCEEditor;
