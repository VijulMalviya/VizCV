import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ATSCheckerData: [
    {
      id: "123456",
      ats_score: 
        {
          score: 85,
          heading: "ATS Score",
          description:
            "Your resume demonstrates a good match for the App Tester position. It effectively highlights relevant skills and experiences, aligning well with the job description's requirements. Minor improvements can further boost its ATS compatibility.",
        },
      key_strengths: {
        heading: "Key Strengths",
        points: [
          {
            heading: "Strong Keyword Optimization",
            description:
              "The resume incorporates several keywords directly from the job description, such as 'manual testing,' 'automated testing,' 'Selenium,' 'Appium,' 'JIRA,' 'Agile,' and 'Scrum,' which strengthens ATS compatibility.",
          },
          {
            heading: "Relevant Experience",
            description:
              "Your experience as an App Tester and QA Intern directly aligns with the target role, showcasing practical application of required skills.",
          },
          {
            heading: "Quantifiable Achievements",
            description:
              "The inclusion of quantifiable achievements, such as reducing test cycle time by 30% and identifying 200+ bugs, adds weight to your experience and demonstrates impact.",
          },
          {
            heading: "Clear Skills Section",
            description:
              "The skills section effectively lists key technologies and methodologies, making it easy for ATS systems to identify and match your qualifications.",
          },
        ],
      },
      overall_alignment: {
        heading: "Overall Alignment",
        description:
          "Your resume exhibits a high degree of alignment with the provided job description and typical requirements for App Tester roles.  The clear formatting, relevant keywords, and detailed descriptions of your experiences contribute to this strong match.",
      },
      feedback: {
        heading: "Feedback and Suggestions",
        points: [
          "Tailor your 'Professional Summary' to mirror the specific language and requirements of each job description you apply for, enhancing keyword relevance.",
          "While your skills are well-represented, consider adding any additional tools or technologies mentioned in the job description, such as 'Cypress' or specific mobile/web app frameworks (if applicable).",
          "Expand on your projects section with quantifiable results and technical details. This will further showcase your skills and accomplishments.",
          "Consider adding a 'Key Achievements' section under each work experience to highlight impactful contributions and further quantify your success.",
        ],
      },
    },
  ] as any,
};

const atsCheckerDataSlice = createSlice({
  name: "resumeParseContent",
  initialState,
  reducers: {
    setATSCheckerData: (state, action) => {
      state.ATSCheckerData = [...state.ATSCheckerData, action.payload];
    },
    clearATSCheckerData: (state) => {
      state.ATSCheckerData = [];
    },
  },
});

export const { setATSCheckerData, clearATSCheckerData } =
  atsCheckerDataSlice.actions;

export default atsCheckerDataSlice.reducer;
