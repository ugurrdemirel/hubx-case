import {configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
import {hubxApi} from '../services/apiService';

export const store = configureStore({
  reducer: {
    [hubxApi.reducerPath]: hubxApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(hubxApi.middleware),
});

setupListeners(store.dispatch);
