import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    settings: {
        theme: "white",
        directory: null,
    }
}

export const counterSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        updateDirectory: (state, { payload }) => {
            state.settings = { ...state.settings, directory: payload }
        }
    }
})

export const { updateDirectory } = counterSlice.actions;
export default counterSlice.reducer;