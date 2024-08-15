import { DELETE_FROM_DRAFT, SAVE_TO_DRAFT } from "store/types/actionTypes";
import { Invoice } from "types/types";


interface DraftReducer {
    drafts: Invoice[];
}

const initialState: DraftReducer = {
    drafts: [],
}

export const draftReducer = (state = initialState, action: any): DraftReducer => {
    switch (action.type) {
        case SAVE_TO_DRAFT:
            const upcomingDraft = action.payload as Invoice
            const newDrafts = [...state.drafts]
            const foundIndex = newDrafts.findIndex(draft => draft.id == upcomingDraft.id)
            if (foundIndex <= 0) {
                newDrafts.push(upcomingDraft)
            }
            return {
                ...state,
                drafts: newDrafts
            }
        case DELETE_FROM_DRAFT:
            const draftId = action.payload
            const updatedDraft = [...state.drafts]
            const index = updatedDraft.findIndex(draft => draft.id == draftId)
            if (index >= 0) {
                updatedDraft.splice(index, 1)
            }
            return {
                ...state,
                drafts: [...updatedDraft]
            }
        default:
            return state
    }
}