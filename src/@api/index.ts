import axios from "axios";

export const checkAtsAndReviewFeedback = async ({payload}: any) => {
  const { data: response } = await axios.post(
    "https://snap-cv-backend.vercel.app/api/check-ats-and-review-feedback",
    payload
  );
  return response;
};


export const optimizeResumewithAI = async ({payload}: any) => {
    const { data: response } = await axios.post(
      "https://snap-cv-backend.vercel.app/api/check-ats-and-review-feedback",
      payload
    );
    return response;
  };
  