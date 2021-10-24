import { combineReducers } from "redux";
import {
    FETCH_BUYERS,
    FETCH_BUYERS_EMPTY,
    FETCH_BUYERS_FAIL,
    FETCH_BUYERS_SUCCESS,
    FETCH_COUNTRIES,
    FETCH_COUNTRIES_EMPTY,
    FETCH_COUNTRIES_FAIL,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_HIGHLIGHTS,
    FETCH_HIGHLIGHTS_EMPTY,
    FETCH_HIGHLIGHTS_FAIL,
    FETCH_HIGHLIGHTS_SUCCESS,
    FETCH_INCOME,
    FETCH_INCOME_EMPTY,
    FETCH_INCOME_FAIL,
    FETCH_INCOME_SUCCESS
} from "./actionTypes";

const initialStateHighlights = {
    highlights: null,
    loading: false,
    error: null,
    emptyMessage: null
};

const highlights = (state = initialStateHighlights, action) => {
    switch (action.type) {
        case FETCH_HIGHLIGHTS:
            return {
                ...state,
                loading: true,
                error: null,
                emptyMessage: null
            };
        case FETCH_HIGHLIGHTS_SUCCESS:
            return {
                ...state,
                loading: false,
                highlights: action.payload,
                error: null,
                emptyMessage: null
            };
        case FETCH_HIGHLIGHTS_EMPTY:
            return {
                ...state,
                loading: false,
                highlights: null,
                error: null,
                emptyMessage: "No stats available for Highlights"
            };
        case FETCH_HIGHLIGHTS_FAIL:
            return {
                ...state,
                loading: false,
                highlights: action.payload,
                error: "Error occurred while fetch stats for Highlights",
                emptyMessage: null
            };
        default:
            return state;
    }
}

const initialStateBuyers = {
    buyers: null,
    loading: false,
    error: null,
    emptyMessage: null
};

const buyers = (state = initialStateBuyers, action) => {
    switch (action.type) {
        case FETCH_BUYERS:
            return {
                ...state,
                loading: true,
                error: null,
                emptyMessage: null
            };
        case FETCH_BUYERS_SUCCESS:
            return {
                ...state,
                loading: false,
                buyers: action.payload,
                error: null,
                emptyMessage: null
            };
        case FETCH_BUYERS_EMPTY:
            return {
                ...state,
                loading: false,
                buyers: null,
                error: null,
                emptyMessage: "No stats available for Buyers"
            };
        case FETCH_BUYERS_FAIL:
            return {
                ...state,
                loading: false,
                buyers: action.payload,
                error: "Error occurred while fetch stats for Buyers",
                emptyMessage: null
            };
        default:
            return state;
    }
}

const initialStateCountries = {
    countries: null,
    loading: false,
    error: null,
    emptyMessage: null
};

const countries = (state = initialStateCountries, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {
                ...state,
                loading: true,
                error: null,
                emptyMessage: null
            };
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                countries: action.payload,
                error: null,
                emptyMessage: null
            };
        case FETCH_COUNTRIES_EMPTY:
            return {
                ...state,
                loading: false,
                countries: null,
                error: null,
                emptyMessage: "No stats available for Countries"
            };
        case FETCH_COUNTRIES_FAIL:
            return {
                ...state,
                loading: false,
                countries: action.payload,
                error: "Error occurred while fetch stats for Countries",
                emptyMessage: null
            };
        default:
            return state;
    }
}

const initialStateIncomes = {
    income: null,
    loading: false,
    error: null,
    emptyMessage: null
};

const income = (state = initialStateIncomes, action) => {
    switch (action.type) {
        case FETCH_INCOME:
            return {
                ...state,
                loading: true,
                error: null,
                emptyMessage: null
            };
        case FETCH_INCOME_SUCCESS:
            return {
                ...state,
                loading: false,
                income: action.payload,
                error: null,
                emptyMessage: null
            };
        case FETCH_INCOME_EMPTY:
            return {
                ...state,
                loading: false,
                income: null,
                error: null,
                emptyMessage: "No stats available for Income"
            };
        case FETCH_INCOME_FAIL:
            return {
                ...state,
                loading: false,
                income: action.payload,
                error: "Error occurred while fetch stats for Income",
                emptyMessage: null
            };
        default:
            return state;
    }
}

export default combineReducers({
    highlights,
    buyers,
    countries,
    income
});