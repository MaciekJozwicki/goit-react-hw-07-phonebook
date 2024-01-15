import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://65a45a5352f07a8b4a3d5cc3.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/contacts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, _, thunkAPI) => {
    console.log(123, data);
    try {
      const response = await axios.post(`${url}/contacts`, {
        name: data.name,
        phone: data.phone
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
