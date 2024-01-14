import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeFromArray: (state, action) => {
      // state.contacts.filter(obj => obj.id !== action.payload);
      state.contacts = state.contacts.filter(obj => obj.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      console.log(state.filter);
    },
    // filteredContacts: (state, ) => {
    //   state.contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(state.filter.toLowerCase())
    //   );
    // },
  },
});

export const { addContact, removeFromArray, setFilter, filteredContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
