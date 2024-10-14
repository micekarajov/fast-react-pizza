import { configureStore } from '@reduxjs/toolkit';
import { updateName } from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: updateName,
  },
});

export default store;
