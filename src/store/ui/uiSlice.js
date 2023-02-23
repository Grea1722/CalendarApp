

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState:{
    isDateModalOpen: false
  },
  reducers: {
    onOpenDateModal: ( state ) => {
        state.isDateModalOpen = true;
    },
    onCloseDateModal: ( state ) => {
        state.isDateModalOpen = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions