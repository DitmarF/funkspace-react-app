import { createSlice } from "@reduxjs/toolkit";

export const serviceBotSlide = createSlice({
    name: 'serviceBot',
    initialState: {
        expression: 'off'
    },
    reducers: {
        setExpression: (state, newExpression) => {
            state.expression = newExpression.payload;
        }
    }
});

export const { setExpression } = serviceBotSlide.actions;
export default serviceBotSlide.reducer;
