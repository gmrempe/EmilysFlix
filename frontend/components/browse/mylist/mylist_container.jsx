import { connect } from "react-redux";
import myListIndex from "./mylist_index";

const msp = state => {
    debugger
    return ({
        videos: state.entities.videos || [],
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds || [] //// todo why doesn't this work?
    })
}

// const mdp = dispatch => ({
//     fetchUser: () => dispatch(fetchUser())
// })

export default connect(msp, null)(myListIndex);