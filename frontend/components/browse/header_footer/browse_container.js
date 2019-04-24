import Browse from './browse';
import {connect} from "react-redux";
import {logout} from '../../../actions/session_actions';
import {fetchAllGenres} from "../../../actions/genre_actions";
import { clearSearch } from "../../../actions/ui_actions";


const msp = state => {
    return ({
        genres: state.entities.genres,
        filteredContent: state.ui.filteredContent || []
    })
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllGenres: () => dispatch(fetchAllGenres()),
    clearSearch: () => dispatch(clearSearch())
})

export default connect(msp, mdp)(Browse);
