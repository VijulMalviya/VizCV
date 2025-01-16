import toast from "react-hot-toast";

export const exportToPDF = () => {
  console.log("DownloadPDF");
};

export const exportToDOCX = () => {
  console.log("DownloadDOCX");
};


export const downloadReport = () => {
  console.log("DownloadReport");
};



 export  const validateInputs = (jobDescription: string | null, uploadedFile: File[]) => {
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