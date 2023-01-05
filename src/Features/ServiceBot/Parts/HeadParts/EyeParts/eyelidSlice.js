import { createSlice } from "@reduxjs/toolkit";
import gsap from "gsap";

export const eyelidSlice = createSlice({
    name: 'eyelid',
    initialState: {
        top: {
            left: '0',
            right: '0',
            ark: '5'
        },
        bottom: {
            left: '0',
            right: '0',
            ark: '5'
        }
    },
    reducers: {
        setLidTop: (state, action) => {
            gsap.to(state.top, {
                left: action.payload.left,
                right: action.payload.left,
            })
        },
        setLidBottom: (state, action) => {
            state.top = {...state.top, ...action.payload}
        }
    }
});

export const { setLidTop, setLidBottom } = eyelidSlice.actions;
export default eyelidSlice.reducer;