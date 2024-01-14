import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    error: null,
    isLoading: false,
  },
  extraReducers: {},
  reducers: {
    // HW-07
    fetchContactsPending: state => {
      state.isLoading = true;
    },
    fetchContactsFulfilled: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    fetchContactsRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // HW-06
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeFromArray: (state, action) => {
      state.contacts = state.contacts.filter(obj => obj.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      console.log(state.filter);
    },
  },
});

export const {
  fetchContactsPending,
  fetchContactsFulfilled,
  fetchContactsRejected,
  addContact,
  removeFromArray,
  setFilter,
  filteredContacts,
} = contactsSlice.actions;

export default contactsSlice.reducer;
