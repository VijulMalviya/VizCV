import { Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbFileTypeDocx } from "react-icons/tb";
import { TbFileTypePdf } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { RiSparkling2Fill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbFileTypeTxt } from "react-icons/tb";
import { jobDescriptions } from "@/constant";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  addJobDescription,
  setCvBlob,
} from "@/redux/slice/resumeParseContentSlice";
import FullPageLoader from "../loader/FullPageLoader";
import { useMutation } from "@tanstack/react-query/";
import { checkAtsAndReviewFeedback, optimizeResumewithAI } from "@/@api";
import { validateInputs } from "@/utils";

const JobApplicationForm = () => {
  const [uploadedFile, setUploadedFile] = useState<File[]>([]);
  const [jobDescription, setJobDescription] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  let isLoading;
  let loadingMessage = "";

  const onCheckAtsAndReviewFeedback = useMutation({
    mutationFn: (payload: any) => checkAtsAndReviewFeedback({ payload }),
    onMutate: () => {
      loadingMessage =
        "Analysing your CV for ATS compatibility and reviewing feedback...";
    },
    onSuccess: () => {
      dispatch(addJobDescription(jobDescription));
      dispatch(setCvBlob(uploadedFile));

      router.push("/ats-and-feedback-result");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.errors?.message ||
        "An error occurred while checking ATS. Please try again.";
      toast.error(errorMessage);
    },
  });

  const handleATSScore = () => {
    if (!validateInputs(jobDescription, uploadedFile)) return;
    const payload = {
      jobDescription,
      cvBlob: uploadedFile[0],
    };
    onCheckAtsAndReviewFeedback.mutate(payload);
  };

  const onOptimizeResumewithAI = useMutation({
    mutationFn: (payload: any) => optimizeResumewithAI({ payload }),
    onMutate: () => {
      loadingMessage =
        "Analysing your CV and Generating your AI-powered resume tailored to the job description...";
    },
    onSuccess: () => {
      dispatch(addJobDescription(jobDescription));
      dispatch(setCvBlob(uploadedFile));

      router.push("/draft");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.errors?.message ||
        "An error occurred while checking ATS. Please try again.";
      toast.error(errorMessage);
    },
  });

  const handleOptimizeWithAI = () => {
    if (!validateInputs(jobDescription, uploadedFile)) return;
    const payload = {
      jobDescription,
      cvBlob: uploadedFile[0],
    };
    onOptimizeResumewithAI.mutate(payload);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles);
  }, []);

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

  const handleChipClick = (jobId: string) => {
    const job = jobDescriptions.find((job) => job.id === jobId);
    if (job) {
      const keyResponsibilities = job.sections.find(
        (section) => section.heading === "Key Responsibilities"
      );
      setJobDescription(
        keyResponsibilities?.description || "No description available."
      );
    }
  };

  return (
    <>
      <Box position="relative" width="100%">
        <Stack direction="row" justifyContent="center" sx={{ my: 5 }}>
          <Stack
            direction="column"
            justifyContent="center"
            className={`formContainer ${!isLoading && "content"}`}
            sx={{
              borderRadius: 2,
              p: 2,
              width: { xs: "100%", sm: "90%", md: "60%" },
              position: "relative",
            }}
          >
            {isLoading && <FullPageLoader loadingMessage={loadingMessage} />}
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
                transition:
                  "border-color 0.3s ease, background-color 0.3s ease",
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
                  Supported formats: <strong>.docx</strong>,{" "}
                  <strong>.pdf</strong> & <strong>.txt</strong>
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
                      <Typography fontSize="small">
                        {file?.name}
                      </Typography>{" "}
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                setJobDescription(value);
              }}
            />
            <Stack direction="column" mt={1}>
              <Typography className="content" sx={{ mb: 1 }} fontSize="small">
                Job description Suggests{" "}
                <i>(Click on title to import job description)</i>
              </Typography>

              <Stack
                direction={{ sm: "row", xs: "column" }}
                spacing={{ md: 1, xs: 0.5 }}
              >
                {jobDescriptions.map((job) => (
                  <Chip
                    key={job.id}
                    label={
                      <Typography fontSize="12px">{job.jobTitle} </Typography>
                    }
                    onClick={() => handleChipClick(job.id)}
                    clickable
                    sx={{ width: "fit-content" }}
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
                disabled={onCheckAtsAndReviewFeedback.isPending}
              >
                {onCheckAtsAndReviewFeedback.isPending
                  ? "Analyzing..."
                  : "Analyze ATS & Review Suggestions"}
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
                  Want to Optimize Your Resume/CV with AI (Job Description
                  Based)?{" "}
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
                disabled={onOptimizeResumewithAI.isPending}
              >
                {onOptimizeResumewithAI.isPending
                  ? "Optimizing..."
                  : `Optimize with AI &nbsp; ${(
                      <BsFillRocketTakeoffFill />
                    )}`}{" "}
                Optimize with AI &nbsp; <BsFillRocketTakeoffFill />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default JobApplicationForm;
