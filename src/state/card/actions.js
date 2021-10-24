import {
    getBuyers,
    getCountries,
    getHighlights,
    getIncome
} from "../../utils/urls";
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
} from "./actionTypes"

export const fetchHighlights = async (dispatch) => {
    dispatch({ type: FETCH_HIGHLIGHTS });

    try {
        const response = await fetch(getHighlights, { mode: 'cors' });
        const data = await response.json();
        if (data?.message === 'SUCCESS' && data?.data) {
            dispatch({ type: FETCH_HIGHLIGHTS_SUCCESS, payload: data.data });
        }
        else {
            dispatch({ type: FETCH_HIGHLIGHTS_EMPTY });
        }
    }
    catch (e) {
        dispatch({ type: FETCH_HIGHLIGHTS_FAIL });
    }
}

export const fetchBuyers = async (dispatch) => {
    dispatch({ type: FETCH_BUYERS });

    try {
        const response = await fetch(getBuyers, { mode: 'cors' });
        const data = await response.json();
        if (data?.message === 'SUCCESS' && data?.data) {
            dispatch({ type: FETCH_BUYERS_SUCCESS, payload: data.data });
        }
        else {
            dispatch({ type: FETCH_BUYERS_EMPTY });
        }
    }
    catch (e) {
        dispatch({ type: FETCH_BUYERS_FAIL });
    }
}

export const fetchCountries = async (dispatch) => {
    dispatch({ type: FETCH_COUNTRIES });

    try {
        const response = await fetch(getCountries, { mode: 'cors' });
        const data = await response.json();
        if (data?.message === 'SUCCESS' && data?.data) {
            dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: data.data });
        }
        else {
            dispatch({ type: FETCH_COUNTRIES_EMPTY });
        }
    }
    catch (e) {
        dispatch({ type: FETCH_COUNTRIES_FAIL });
    }
}

export const fetchIncomes = async (dispatch) => {
    dispatch({ type: FETCH_INCOME });

    try {
        const response = await fetch(getIncome, { mode: 'cors' });
        const data = await response.json();
        if (data?.message === 'SUCCESS' && data?.data) {
            dispatch({ type: FETCH_INCOME_SUCCESS, payload: data.data });
        }
        else {
            dispatch({ type: FETCH_INCOME_EMPTY });
        }
    }
    catch (e) {
        dispatch({ type: FETCH_INCOME_FAIL });
    }
}