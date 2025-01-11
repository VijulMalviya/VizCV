import * as Yup from 'yup'
export const jobApplicationSchema = Yup.object().shape({
  jobDescription: Yup
    .string()
    .required('Job description is required')
    .min(10, 'Job description must be at least 10 characters'),
  resume: Yup
    .mixed()
    .required('Resume is required')
   
});