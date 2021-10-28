import { MESSAGE_LOADING, GET_MESSAGES, SET_BUEGET } from './messageActions.js';

const initialState = {
    messages: [],
    isLoading: false,
    totalIncome: 0,
    totalExpense: 0,
    budget: 0,
};

export const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case MESSAGE_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_MESSAGES: 
            return { 
                ...state,
                messages: [...action.messages],
                totalIncome: action.totalIncome,
                totalExpense: action.totalExpense,
                isLoading: false,
            };
        case SET_BUEGET:
            return { 
                ...state, 
                messages: [...action.messages],
                isLoading: false,
            };

        default: 
            return state;
    }
};