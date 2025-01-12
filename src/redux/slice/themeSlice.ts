import { ThemeState } from '@/@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ThemeState = {
  mode: 'dark', 
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action:PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      document.documentElement.setAttribute("data-theme", action.payload); 
    },

  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
