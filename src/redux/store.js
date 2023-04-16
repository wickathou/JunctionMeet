import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './data/dataSlice';

import userReducer from './users/usersSlice';

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
