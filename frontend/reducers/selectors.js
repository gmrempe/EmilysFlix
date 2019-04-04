export const selectAllVideos = state => Object.values(state.entities.videos);

export const selectAllGenres = state => Object.values(state.entities.genres);

// export const selectMyList = state => {
//     debugger
//     Object.values(state.entities.users[0].mylistVideoIds)
// };