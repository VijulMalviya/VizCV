import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slice/themeSlice';
import resumeParseContentSlice from './slice/resumeParseContentSlice';
import atsCheckerDataSlice from './slice/atsCheckerDataSlice';


export const store = configureStore({
  reducer: {
    theme: themeSlice,
    resumeParseContent:resumeParseContentSlice,
    atsChecker: atsCheckerDataSlice
  },
  devTools: true,
});
