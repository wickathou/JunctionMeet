import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  challengeFilter: 'All challenges',
  challenges: [
    {
      name: 'All challenges',
    },
    {
      name: 'Elisa',
    },
    {
      name: 'Nordea',
    },
    {
      name: 'Startup Sauna',
    },
    {
      name: 'Fazer'
    }
  ],
}

export const challengesSlice = createSlice({
  name: 'challenges',
  initialState: initialState,
  reducers: {
    applyFilter: (state, { payload }) => ({ ...state, challengeFilter: payload}),
  },
});

export const { applyFilter } = challengesSlice.actions;

export default challengesSlice.reducer;
