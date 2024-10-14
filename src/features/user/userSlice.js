/*
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
*/

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

// slice of our global UI State,
// slice call user with initial state and
// reducer(function that is responsible for updating the state object)
// directly mutate State Object and then set the state.username to action.payload
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

// inside userSlice.action we have access to action creators
// export as a updateName and update the name using this action creator
export const { updateName } = userSlice.actions;

// use this reducer to set up or store
export default userSlice.reducer;
