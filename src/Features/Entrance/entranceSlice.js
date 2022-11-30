import { createSlice } from "@reduxjs/toolkit";

export const entranceSlice = createSlice({
    name: 'entrance',
    initialState: {
        isOn: false,
    },
    reducers: {
        toggleOn: state => {
            state.isOn ? state.isOn = false : state.isOn = true
        },
    }
})

export const { toggleOn } = entranceSlice.actions;
export default entranceSlice.reducer;