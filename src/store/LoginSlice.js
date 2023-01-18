// import { createSlice } from '@reduxjs/toolkit';
// let logouTimer;
// const initialToken = localStorage.getItem('token');

// const calculateRemaiingTime = (experiationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(experiationTime).getTime();

//   const remainingTime = adjExpirationTime - currentTime;

//   return remainingTime;
// };
// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem('token');
//   const storedExpirationDate = localStorage.getItem('experationTime');
//   const remainingTime = calculateRemaiingTime(storedExpirationDate);
//   if (remainingTime <= 3600) {
//     localStorage.removeItem('token');
//     localStorage.removeItem('experationTime');
//     return null;
//   }
//   return { token: storedToken, duration: remainingTime };
// };

// const tokenData = retrieveStoredToken();
// const initialState = {
//   token: tokenData ? tokenData.token : null,
// };

// const loginSlice = createSlice({
//   name: 'loginAuth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.token = null;
//       localStorage.removeItem('token');
//       if (logouTimer) {
//         clearTimeout(logouTimer);
//       }
//     },
//     login(state, { payload }) {
//       console.log(payload.token);
//       state.token = payload.token;
//       localStorage.setItem('token', payload.token);
//       localStorage.setItem('experationTime', payload.experiationTime);
//       const remainingTime = calculateRemaiingTime(payload.experiationTime);
//       // logouTimer = setTimeout(this.logout, remainingTime);
//     },
//   },
// });

// export const loginSliceReducer = loginSlice.reducer;
// export const loginSliceActions = loginSlice.actions;
