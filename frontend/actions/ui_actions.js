export const SEARCH = "SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const search = (filteredContent) => ({
    type: SEARCH,
    filteredContent
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH
})