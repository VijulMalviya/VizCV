import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resumeParseData : [] as any,
};

const resumeParseContentSlice = createSlice({
  name: 'resumeParseContent',
  initialState,
  reducers: {
    setResumeParseData: (state, action) => {
      state.resumeParseData = [...state.resumeParseData, action.payload]; 
    },
    clearResumeParseData: (state) => {
      state.resumeParseData = []; 
    },
  }
});


export const { setResumeParseData, clearResumeParseData } = resumeParseContentSlice.actions;

export default resumeParseContentSlice.reducer;
