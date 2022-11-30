import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        themeId: '1'
    },
    reducers: {
        switchTheme: (state, id) => {
            state.themeId = id;
        }
    }

})

export const {switchTheme} = appSlice.actions;
export default appSlice.reducer;