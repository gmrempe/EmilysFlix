import App from "./App";
import { connect } from "react-redux";

export const msp = state => {
    return {
        filteredContent: state.ui.filteredContent || [],
        activeSearch: state.ui.activeSearch
    }
}

export default connect(msp, null)(App);