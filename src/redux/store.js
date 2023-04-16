import { combineReducers, configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams/teamsSlice';
import challengesReducer from './challenges/challengesSlice';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  teams: teamsReducer,
  challenges: challengesReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
