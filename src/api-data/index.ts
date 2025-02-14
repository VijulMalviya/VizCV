import axios from "axios";


export const checkAtsAndReviewFeedback = async ({ payload }: any) => {
  const { data: response } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/check-ats-and-review-feedback`,
    payload
  );
  return response;
};

export const optimizeResumewithAI = async ({ payload }: any) => {
  const { data: response } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/resume-optimize`,
    payload
  );
  return response;
};
