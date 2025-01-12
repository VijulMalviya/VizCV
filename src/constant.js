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




  export const jobDescriptions =  [
    {
      "id": "job-001",
      "jobTitle": "Python Developer (Fresher)",
      "sections": [
        {
          "heading": "Job Overview",
          "description": "We are seeking a motivated Python Developer fresher to join our team. This role is ideal for recent graduates with a passion for coding and an eagerness to learn and grow in backend development."
        },
        {
          "heading": "Key Responsibilities",
          "description": "\n- Assist in designing and developing backend solutions using Python.\n- Write clean, maintainable, and efficient code under the guidance of senior developers.\n- Actively participate in team meetings and contribute to discussions.\n- Debug and resolve basic technical issues with a problem-solving mindset."
        }
      ]
    },
    {
      "id": "job-002",
      "jobTitle": "Python Developer (Experienced)",
      "sections": [
        {
          "heading": "Job Overview",
          "description": "We are looking for an experienced Python Developer with expertise in creating scalable and efficient backend systems. This role demands strong technical skills and a proven ability to deliver high-quality solutions."
        },
        {
          "heading": "Key Responsibilities",
          "description": "\n- Design, develop, and maintain scalable backend solutions using Python.\n- Build and optimize APIs to ensure performance and reliability.\n- Collaborate closely with front-end developers and other team members to integrate components seamlessly.\n- Troubleshoot and resolve complex technical issues promptly.\n- Mentor junior developers, fostering a culture of learning and growth.\n- Conduct code reviews to ensure coding standards and best practices are followed."
        }
      ]
    },
    {
      "id": "job-003",
      "jobTitle": "React.js Developer (Experienced)",
      "sections": [
        {
          "heading": "Job Overview",
          "description": "We are seeking an experienced React.js Developer to design and implement dynamic front-end applications. The ideal candidate will have in-depth knowledge of modern JavaScript libraries and frameworks and a passion for delivering user-centric solutions."
        },
        {
          "heading": "Key Responsibilities",
          "description": "\n- Design, develop, and optimize user-facing features using React.js.\n- Work collaboratively with backend developers to integrate APIs and deliver cohesive solutions.\n- Write high-quality, reusable, and maintainable code following best practices.\n- Stay informed about the latest trends in React.js and front-end technologies.\n- Debug and resolve front-end issues to ensure a seamless user experience.\n- Actively participate in team discussions and contribute innovative ideas during code reviews."
        }
      ]
    }
  ]

 export const ATSAndFeedbackResultDetails = {
    "status": "success",
    "data": {
      "ATS_Score": {
        "score":75,
        "heading": "ATS Score",
        "description": "Your resume demonstrates a strong foundation in front-end development, with relevant skills in React and Next.js. Improvements in keyword optimization, formatting, and experience details can enhance your ATS compatibility and alignment with job descriptions."
      },
      "Key_Strengths": {
        "heading": "Key Strengths",
        "points": [
          {
            "heading": "Relevant Technical Skills",
            "description": "Your resume lists key technologies like React, Next.js, and JavaScript, which are critical for front-end development roles."
          },
          {
            "heading": "Clear and Concise Experience Section",
            "description": "Your job experiences are described clearly, making your responsibilities easy to understand for both ATS systems and hiring managers."
          },
          {
            "heading": "Emphasis on Front-End Development",
            "description": "The resume showcases strong expertise in front-end development with modern frameworks, a key factor for most job requirements."
          }
        ]
      },
      "Areas_of_Improvement": {
        "heading": "Areas of Improvement",
        "points": [
          {
            "heading": "Keyword Optimization",
            "description": "Include industry-specific terms like 'Vue.js,' 'Angular,' or 'CSS preprocessors' (Sass, Less) to improve ATS parsing and alignment with job descriptions."
          },
          {
            "heading": "Action Verbs",
            "description": "Replace generic phrases like 'Worked on' with stronger action verbs such as 'Developed,' 'Led,' 'Implemented,' or 'Optimized' to emphasize contributions."
          },
          {
            "heading": "Quantifiable Results",
            "description": "Add metrics to showcase your impact, such as 'Improved page load time by 30%' or 'Led a team of 5 developers' to make your achievements measurable and impactful."
          },
          {
            "heading": "Formatting for ATS Compatibility",
            "description": "Use ATS-friendly formatting, including distinct section headers like 'Work Experience' and 'Skills.' Avoid graphics or tables that might confuse ATS systems."
          }
        ]
      },
      "Overall_Alignment": {
        "heading": "Overall Alignment",
        "description": "Your resume moderately aligns with typical job descriptions for front-end developers. Adding targeted keywords and more specific role-tailored details will improve alignment significantly."
      },
      "Feedback": {
        "heading": "Feedback and Suggestions",
        "points": [
          "Review job descriptions for similar roles and incorporate additional frameworks or libraries such as Angular, Vue.js, or TypeScript.",
          "Include metrics wherever possible to demonstrate the scope and impact of your contributions.",
          "Replace generic phrases with action-oriented language to convey initiative and achievements.",
          "Ensure formatting is ATS-friendly by using standard fonts, clear section headers, and avoiding complex layouts."
        ]
      }
    }
  }
  