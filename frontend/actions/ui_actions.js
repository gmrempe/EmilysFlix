export const SEARCH = "SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const search = (filteredContent, contentFilter) => ({
    type: SEARCH,
    filteredContent,
    contentFilter
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH
})