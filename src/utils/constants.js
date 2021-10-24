import { getBuyers, getCountries, getHighlights, getIncome } from "./urls";

//types of socket event-messages
export const types = {
    ALL: 'ALL',
    HIGHLIGHTS: 'HIGHLIGHTS',
    BUYERS: 'BUYERS',
    COUNTRIES: 'COUNTRIES',
    INCOME: 'INCOME',
};

//sort options
export const filterOptions = {
    [types.HIGHLIGHTS]: [{ type: 'WeekDay (Asc)', sortBy: 1 }, { type: 'Amount (Desc)', sortBy: 2 }, { type: 'Amount (Asc)', sortBy: 3 }],
    [types.BUYERS]: [{ type: 'Month (Asc)', sortBy: 4 }, { type: 'Amount (Desc)', sortBy: 2 }, { type: 'Amount (Asc)', sortBy: 3 }],
    [types.COUNTRIES]: [{ type: 'Country (Asc)', sortBy: 5 }, { type: 'Amount (Desc)', sortBy: 2 }, { type: 'Amount (Asc)', sortBy: 3 }],
    [types.INCOME]: [{ type: 'Month (Asc)', sortBy: 4 }, { type: 'Amount (Desc)', sortBy: 2 }, { type: 'Amount (Asc)', sortBy: 3 }]
};

//links for href
export const links = {
    [types.HIGHLIGHTS]: getHighlights,
    [types.BUYERS]: getBuyers,
    [types.COUNTRIES]: getCountries,
    [types.INCOME]: getIncome
}