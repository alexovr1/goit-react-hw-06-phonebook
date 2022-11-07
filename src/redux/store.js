import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
} from 'redux-persist';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

const reducers = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export const rootReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);