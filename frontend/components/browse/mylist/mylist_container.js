import { connect } from "react-redux";
import myListIndex from "./mylist_index";
import { selectAllVideos } from "../../../reducers/selectors";

const msp = state => {
    // debugger
    return ({
        videos: selectAllVideos(state) || [],
        myListVideoIds: state.entities.users[5].myListVideoIds || []  //// todo how to get user id???
    })
}

// const mdp = dispatch => ({
//     fetchUser: () => dispatch(fetchUser())
// })

export default connect(msp, null)(myListIndex);