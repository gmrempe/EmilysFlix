import Browse from './browse';
import {connect} from "react-redux";
import {logout} from '../../../actions/session_actions';
import {fetchAllGenres} from "../../../actions/genre_actions";

const msp = state => {
    return ({
    genres: state.entities.genres
    })
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllGenres: () => dispatch(fetchAllGenres())
})

export default connect(msp, mdp)(Browse);
