import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => {
        state.isLoading = true;
        console.log('state', state);
        console.log('payload', payload);
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.contacts = payload;
        console.log('state1', state);
        console.log('payload1', payload);
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = true;
        console.log('state2', state);
        console.log('payload2', payload);
      });
    // .addCase(addContact.pending, (state, { payload }) => {
    //   state.isLoading = true;
    //   console.log('state', state);
    //   console.log('payload', payload);
    // })
    // .addCase(addContact.fulfilled, (state, { payload }) => {
    //   state.isLoading = true;
    //   state.contacts = payload;
    //   console.log('state1', state);
    //   console.log('payload1', payload);
    // })
    // .addCase(addContact.rejected, (state, { payload }) => {
    //   state.isLoading = true;
    //   console.log('state2', state);
    //   console.log('payload2', payload);
    // });
  },
  reducers: {
    //   // HW-07
    //   fetchContactsPending: state => {
    //     state.isLoading = true;
    //   },
    //   fetchContactsFulfilled: (state, action) => {
    //     state.isLoading = false;
    //     state.contacts = action.payload;
    //   },
    //   fetchContactsRejected: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
    //   // HW-06
    //   addContact: (state, action) => {
    //     state.contacts.push(action.payload);
    //   },
    //   removeFromArray: (state, action) => {
    //     state.contacts = state.contacts.filter(obj => obj.id !== action.payload);
    //   },
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
