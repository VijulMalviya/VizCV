import { dummyResume } from '@/constant';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cvContent: dummyResume || '',
  cvBlob: null,
  jobDescription: ''
};

const resumeParseContentSlice = createSlice({
  name: 'resumeParseContent',
  initialState,
  reducers: {
    setCvContent: (state, action) => {
      state.cvContent = action.payload;
    },
    setCvBlob: (state, action) => {
      state.cvBlob = action.payload;
    },
    addJobDescription: (state, action) => {
      state.jobDescription = action.payload;
    }
  }
});


export const { setCvContent, setCvBlob, addJobDescription } = resumeParseContentSlice.actions;

export default resumeParseContentSlice.reducer;
