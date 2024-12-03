import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',  // Initial value for name
  email: '', // Initial value for email
  password: '', // Initial value for password
  errors: {
    name: '',
    email: '',
    password: '',
  },
  submitStatus: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    setError: (state, action) => {
      state.errors[action.payload.field] = action.payload.message;
    },
    clearErrors: (state) => {
      state.errors = { name: '', email: '', password: '' };
    },
    setSubmitStatus: (state, action) => {
      state.submitStatus = action.payload;
    },
  },
});

export const { setField, setError, clearErrors, setSubmitStatus } = formSlice.actions;
export default formSlice.reducer;
