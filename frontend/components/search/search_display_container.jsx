import { connect } from "react-redux";
import Base from "../base_presentational/base";

const msp = state => {

    return ({
        videos: state.entities.videos || [],
        contentIds: state.ui.filteredContent || [],
        title: "Search Results"
    })
}

export default connect(msp, null)(Base);