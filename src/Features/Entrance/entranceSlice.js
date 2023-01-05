import { createSlice } from "@reduxjs/toolkit";

export const entranceSlice = createSlice({
    name: 'entrance',
    initialState: {
        isActive: false,
    },
    reducers: {
        toggleOn: state => {
            state.isActive = !state.isActive
        }
    }
});

export const { toggleOn } = entranceSlice.actions;
export default entranceSlice.reducer;