import { connect } from "react-redux";
import Search from "./search";
import {selectAllGenres, selectAllVideos} from "../../reducers/selectors";
import {search} from "../../actions/ui_actions";

const msp = state => ({
    videos: selectAllVideos(state),
    genres: selectAllGenres(state)
})

const mdp = dispatch => ({
    search: filteredContent => dispatch(search(filteredContent))
})

export default connect(msp, mdp)(Search);