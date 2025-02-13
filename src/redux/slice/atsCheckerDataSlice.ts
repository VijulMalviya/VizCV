import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ATSCheckerData: [] as any,  
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

export const { setATSCheckerData, clearATSCheckerData } = atsCheckerDataSlice.actions;

export default atsCheckerDataSlice.reducer;
