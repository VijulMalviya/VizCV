import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slice/themeSlice';
import resumeParseContentSlice from './slice/resumeParseContentSlice';


export const store = configureStore({
  reducer: {
    theme: themeSlice,
    resumeParseContent:resumeParseContentSlice
  },
  devTools: true,
});
