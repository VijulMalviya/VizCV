import { FaRegFileAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import { RiSparklingFill } from "react-icons/ri";

export const features = [
  {
    title: "Resume Parsing",
    description:
      "Upload your resume (PDF, DOCX, or TXT) and let SnapCV extract essential details like skills, education, and work experience.",
    icon: <FaRegFileAlt fontSize={24} />,
  },
  {
    title: "ATS Score Checker",
    description:
      "Analyze your resume's ATS compatibility, focusing on keyword relevance, formatting, and structure to improve recruiter visibility.",
    icon: <FaChartLine fontSize={24} />,
  },
  {
    title: "Job Description Matching",
    description:
      "Match your resume to job descriptions and identify skills or experience gaps with tailored suggestions for optimization.",
    icon: <FaSearchengin fontSize={24} />,
  },
  {
    title: "Optimize with AI Based on Job Descriptions",
    description:
      "Use AI to tailor your resume for specific job descriptions, recommending relevant keywords and formatting to enhance your application.",
    icon: <RiSparklingFill fontSize={24} />,
  },
];
