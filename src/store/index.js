import {  configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootReducer from './reducer';
import { blogApi } from "./slice/blogSlice";
import { authApi } from './slice/authSlice';

const persistConfig ={
    key: 'root',
    version: 1,
    storage,
   }
   const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
       REGISTER
      ],
    },
}).concat(blogApi.middleware, authApi.middleware),
})

export default persistStore(store);
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
