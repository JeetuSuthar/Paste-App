import { createSlice } from '@reduxjs/toolkit';
import toast, { Toaster } from 'react-hot-toast';

// Safely retrieve pastes from localStorage
const initialState = {
    pastes: (() => {
        try {
            const pastesFromStorage = localStorage.getItem("pastes");
            return pastesFromStorage ? JSON.parse(pastesFromStorage) : [];
        } catch (error) {
            console.error("Error parsing pastes from localStorage:", error);
            return [];
        }
    })()
};

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPastes: (state, action) => {
            const paste = action.payload;
            state.pastes.push(paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste Created Successfullly")
        },
        updateToPastes: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item) =>
                item._id === paste._id);

            if (index >= 0) {
                state.pastes[index] = paste;
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste Updated")
            }
        },
        ResetAllPastes: (state, action) => {
            state.pastes = [];
            localStorage.setItem("pastes");
        },
        removeFromPastes: (state, action) => {
            const pasteId = action.payload;
            console.log(pasteId);
            const index = state.pastes.findIndex((item) =>
                item._id === pasteId);

            if (index >= 0) {
                state.pastes.splice(index, 1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste Deleted");
            }



        },
    },
});

// Action creators
export const { addToPastes, updateToPastes, ResetAllPastes, removeFromPastes } = pasteSlice.actions;

export default pasteSlice.reducer;
