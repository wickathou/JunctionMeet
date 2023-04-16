import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [
    {
      name: 'sisuStronk',
      challenge: 'Fazer',
      roles: ['Data', 'Sales', 'Product', 'Marketing'],
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
      roles: ['Data','Product' , 'Sales'],
      members: [{
        name: 'Alex',
        role: 'Team Lead'
      },{
        name: 'Jane',
        role: 'Designer'
      },{
        name: 'Lena',
        role: 'Web Dev'
      },]
    },
    {
      name: 'PokeHacks',
      challenge: 'Nordea',
      roles: [ 'Sales', 'Data', 'Marketing'],
      members: [{
        name: 'Kevin',
        role: 'Team Lead'
      },{
        name: 'Mikko',
        role: 'Designer'
      },{
        name: 'Elias',
        role: 'Web Dev'
      },]
    },
    {
      name: 'Wasteless',
      challenge: 'Startup Sauna',
      roles: ['Data', 'Marketing','Sales', 'Product'],
      members: [{
        name: 'Elina',
        role: 'Team Lead'
      },{
        name: 'Jan',
        role: 'Designer'
      },{
        name: 'Lika',
        role: 'Web Dev'
      },
      
    ]
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
