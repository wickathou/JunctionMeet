import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await { data: 'Some user fetched' };
  return response.data;
});

const initialState = {
  name: 'No user',
  status: 'Not logged in',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => ({ ...state, status:'Signed in' }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'complete';
      state.name = action.payload;
    });
  },
});

export const selectUserName = (state) => state.user.name;
export const selectUserFetchStatus = (state) => state.user.status;

export const { login } = userSlice.actions;
export default userSlice.reducer;
