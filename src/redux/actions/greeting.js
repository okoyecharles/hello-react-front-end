import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import GET_RANDOM_GREETING from '../actionTypes';

const getRandomGreeting = createAsyncThunk(GET_RANDOM_GREETING, async () => {
  // Use localhost:3001 if you have a rails server running OR
  // Use https://stormy-plains-52723.herokuapp.com if you don't have a rails server running
  const { data } = await axios.get('http://localhost:3001/v1/random_greeting');
  return data;
});

export default getRandomGreeting;
