import { Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbFileTypeDocx } from "react-icons/tb";
import { TbFileTypePdf } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import { RiSparkling2Fill } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbFileTypeTxt } from "react-icons/tb";
import { jobDescriptions } from "@/constant";
import { useRouter } from "next/router";

const JobApplicationForm = () => {
  const [uploadedFile, setUploadedFile] = useState<File[]>([]);
  const [jobDescription, setJobDescription] = useState<string | null>(null);
  const router = useRouter()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles);
  }, []);

  const validateInputs = () => {
    if (!jobDescription && uploadedFile.length === 0) {
      toast.error(
        "Please add a job description and upload at least one Document (PDF, DOCX or Txt)."
      );
      return false;
    }
  
    if (!jobDescription) {
      toast.error("Please add a job description.");
      return false;
    }
  
    if (uploadedFile.length === 0) {
      toast.error("Please upload at least one Document (PDF, DOCX or Txt).");
      return false;
    }
  
    return true;
  };
  
  const handleOptimizeWithAI = () => {
    if (!validateInputs()) return;
  
    console.log("Optimizing resume with AI...");
  };
  
  const handleATSScore = () => {
    if (!validateInputs()) return;
    console.log("Calculating ATS score...");

    router.push('/ats-and-feedback-result')
  };
  

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
    multiple: false,
    maxSize: 5 * 1024 * 1024,
    onDropRejected: (rejections) => {
      rejections.forEach((rejection) => {
        rejection.errors.forEach((error) => {
          if (error.code === "too-many-files") {
            toast.error("You can upload only one file at a time.");
          }
          if (error.code === "file-invalid-type") {
            toast.error(
              "Unsupported file format. Please upload a PDF or DOCX file."
            );
          }
          if (error.code === "file-too-large") {
            toast.error("File size exceeds the 5MB limit.");
          }
        });
      });
    },
  });

  const handleChipClick = (jobId:any) => {
    const job = jobDescriptions.find((job) => job.id === jobId);
    if (job) {
      const keyResponsibilities = job.sections.find(
        (section) => section.heading === "Key Responsibilities"
      );
      setJobDescription(keyResponsibilities?.description || "No description available.");
    }
  };


  return (
    <>
      <Stack direction="row" justifyContent="center" sx={{ my: 5 }}>
        <Stack
          direction="column"
          justifyContent="center"
          className="formContainer content"
          sx={{
            borderRadius: 2,
            p: 2,
            width: { xs: "100%", sm: "90%", md: "60%" },
          }}
        >
          <Typography
            className="content"
            sx={{ mb: 1 }}
            fontSize="small"
            fontWeight="bold"
          >
            Upload your CV/Resume
          </Typography>
          <Box
            {...getRootProps()}
            sx={{
              p: 4,
              border: "1px solid",
              borderRadius: 1,
              textAlign: "center",
              cursor: "pointer",
              transition: "border-color 0.3s ease, background-color 0.3s ease",
            }}
            className="uploadFilesContainer"
          >
            <input {...getInputProps()} />
            <Stack alignItems="center" spacing={2}>
              <AiOutlineCloudUpload size={50} />
              <Typography className="content" fontSize="small">
                Drag & drop files here, or click to select files
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                mt={2}
              >
                <TbFileTypeDocx size={30} />
                <TbFileTypePdf size={30} />
                <TbFileTypeTxt size={30} />
              </Stack>
              <Typography className="content" fontSize="small">
                Supported formats: <strong>.docx</strong>, <strong>.pdf</strong>{" "}
                & <strong>.txt</strong>
              </Typography>
            </Stack>
          </Box>

          {uploadedFile?.length > 0 &&
            uploadedFile.map((file, index) => (
              <Chip
                key={index}
                color="success"
                sx={{ width: "fit-content", mt: 1 }}
                size="small"
                label={
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {" "}
                    <Typography fontSize="small">{file?.name}</Typography>{" "}
                    <IoMdRemoveCircleOutline
                      onClick={() => setUploadedFile([])}
                      fontSize={16}
                      style={{ cursor: "pointer" }}
                    />{" "}
                  </Stack>
                }
              />
            ))}

          <Typography
            className="content"
            sx={{ mt: 2, mb: 1 }}
            fontSize="small"
            fontWeight="bold"
          >
            Add Job Description
          </Typography>
          <TextField
            hiddenLabel
            id="job-description"
            name="job_description"
            placeholder="Type your job description here..."
            multiline
            variant="outlined"
            fullWidth
            rows={4}
            className="custom-textfield content"
            value={jobDescription}
            onChange={(event) => {
              const value = event.target.value;
              setJobDescription(value);
            }}
          />
          <Stack direction="column" mt={1}>
          <Typography
            className="content"
            sx={{ mb: 1 }}
            fontSize="small"
            
          >
            Job description Suggests  <i>(Click on title to import job description)</i>
          </Typography>
          <Stack direction={{md:"row",xs:"column"}} spacing={{md:1,xs:0.5}}>

          {jobDescriptions.map((job) => (
          <Chip
            key={job.id}
            label={<Typography fontSize="12px">{job.jobTitle} </Typography>}
            onClick={() => handleChipClick(job.id)}
            clickable
            sx={{width:'fit-content'}}
            color="warning"
            variant="outlined"
            size="small"
            
          />
        ))}
          </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="flex-end"
            spacing={1}
            sx={{ mt: 3 }}
          >
            <Button
              variant="contained"
              startIcon={<IoMdCheckmarkCircleOutline />}
              onClick={handleATSScore}
            >
              Analyze ATS & Review Suggestions
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{ mt: 5 }}
          >
            <RiSparkling2Fill color="#FFEB3B" fontSize={20} />
            <Typography className="content">
              <strong>
                {" "}
                Want to Optimize Your Resume/CV with AI (Job Description Based)?{" "}
              </strong>
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                p: 2,
                width: { xs: "100%", sm: "80%", md: "50%" },
                background:
                  "linear-gradient(to right, #0A01FF 0%, #CF4EB9 100%)",
              }}
              onClick={handleOptimizeWithAI}
            >
              Optimize with AI &nbsp; <BsFillRocketTakeoffFill />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default JobApplicationForm;
