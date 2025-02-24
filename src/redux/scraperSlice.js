import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour appeler l'API
export const startScraping = createAsyncThunk(
  'scraper/startScraping',
  async () => {
    const response = await fetch('http://localhost:4000/api/data/posts'); 
    if (!response.ok) {
      throw new Error('Échec du scraping');
    }
    return await response.json();
  }
);

const scraperSlice = createSlice({
  name: 'scraper',
  initialState: {
    data: null,
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startScraping.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(startScraping.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(startScraping.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default scraperSlice.reducer;
