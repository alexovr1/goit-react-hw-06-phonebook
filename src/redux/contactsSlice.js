import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(({ name }) => name === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;