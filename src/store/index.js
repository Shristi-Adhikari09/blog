import {  configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';

import persistReducer from 'redux-persist/es/persistReducer';
import rootReducer from './reducer';

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
}),
})

export default persistStore(store);
