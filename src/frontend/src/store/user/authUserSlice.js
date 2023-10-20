import {createSlice} from '@reduxjs/toolkit';

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState: {
        role: 'customer',
    },
    reducers: {
        authUserSet(state, action) {
            state.role = action.payload;
        },
        authUserUnset(state) {
            state = {};
        },
    },
});

export const {
    authUserSet,
    authUserUnset,
} = authUserSlice.actions;

export default authUserSlice.reducer;
