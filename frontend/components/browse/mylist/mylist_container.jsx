import { connect } from "react-redux";
import MyListIndex from "./mylist_index.jsx";

const msp = state => {
    return ({
        videos: state.entities.videos || [],
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds || [],
    })
}

// const mdp = dispatch => ({
// })

export default connect(msp, null)(MyListIndex);