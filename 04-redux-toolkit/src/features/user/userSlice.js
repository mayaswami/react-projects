import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Maya",
    email: "maya@example.com",
    age: 22,
    city: "Jaipur",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName(state) {
            state.name = "Ritu";
        }
    },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;