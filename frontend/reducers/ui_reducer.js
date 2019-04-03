


export default (state = {}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {

        default:
            return prevState;
    }
}