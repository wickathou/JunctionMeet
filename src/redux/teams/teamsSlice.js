import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [
    {
      name: 'sisuStronk',
      challenge: 'Fazer',
      members: [{
        name: 'Joe',
        role: 'Team Lead'
      },{
        name: 'Laura',
        role: 'Designer'
      },{
        name: 'Mikka',
        role: 'Web Dev'
      },]
    },
    {
      name: 'Last Minute',
      challenge: 'Elisa',
      members: [{
        name: 'Joe',
        role: 'Team Lead'
      },{
        name: 'Laura',
        role: 'Designer'
      },{
        name: 'Mikka',
        role: 'Web Dev'
      },]
    },
    {
      name: 'PokeHacks',
      challenge: 'Nordea',
      members: [{
        name: 'Joe',
        role: 'Team Lead'
      },{
        name: 'Laura',
        role: 'Designer'
      },{
        name: 'Mikka',
        role: 'Web Dev'
      },]
    },
    {
      name: 'Wasteless',
      challenge: 'Startup Sauna',
      members: [{
        name: 'Joe',
        role: 'Team Lead'
      },{
        name: 'Laura',
        role: 'Designer'
      },{
        name: 'Mikka',
        role: 'Web Dev'
      },]
    }
    
  ],
}

export const teamsSlice = createSlice({
  name: 'teams',
  initialState: initialState,
  reducers: {
    increment: (state) => ({ ...state, value: state.value + 1 }),
  },
});

export const { increment } = teamsSlice.actions;

export default teamsSlice.reducer;
