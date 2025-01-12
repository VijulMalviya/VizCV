import { Alert, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { TbFileTypeDocx } from "react-icons/tb";
import { TbFileTypePdf } from "react-icons/tb";
import { exportToDOCX, exportToPDF } from "@/utils";
import { GoAlertFill } from "react-icons/go";


const MobileEditor = () => {
  const [exportLoading, setExportLoading] = useState({
    pdf: false,
    docx: false,
  });
  return (
    <>
      <Stack direction="column" justifyContent="center">

        <Alert
          variant="outlined"
          sx={{ mb: 2 }}
          severity={"error"}
          icon={false}
        >
          <Typography
            fontSize="small"
            color="#ef5350"
            textAlign="center"
            sx={{ my: 1 }}
          >
            <GoAlertFill color="#ef5350" fontSize={44} style={{marginBottom:4}}/> <br/>
            Editing your resume or CV on small devices may not provide the best
            experience, as the editor is not fully supported on mobile devices.
            <br />
            So, you can easily edit your resume on tablets, laptops, or desktops
            for a smoother and more efficient experience.
          </Typography>
        </Alert>

        <Typography mb={4} textAlign="center" className="content">
          You can download your resume/CV as a PDF or DOCX directly on small
          devices.
        </Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<TbFileTypePdf />}
          onClick={exportToPDF}
          disabled={exportLoading?.pdf}
          size="large"
        >
          {exportLoading?.pdf ? "Downloding,,," : "Download PDF"}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          startIcon={<TbFileTypeDocx />}
          onClick={exportToDOCX}
          disabled={exportLoading?.docx}
          size="large"
        >
          {exportLoading?.docx ? "Downloding,,," : "Download DOCX"}
        </Button>
      </Stack>
    </>
  );
};

export default MobileEditor;
