import React from 'react';

class Search extends React.Component {
    constructor(props) {
        this.state = {
            contentFilter: "",
            genres: [],
            titles: [],
            people: [],
            filteredGenres: [],
            filteredTitles: [],
            filteredPeople: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            contentFilter: e.target.value
        })
        this.props.onChange(event.target.value)
    }

    componentWillMount() {
        this.setState({
            genres,
            titles,
            people,
            filteredGenres: genres,
            filteredTitles: titles,
            filteredPeople: people,
        })
    }

    filterContent = (contentFilter) => {
        let filteredContent = this.state.genres.concat(this.state.entities.videos.titles).concat(this.state.entities.videos.creators)
        filteredContent = filteredContent.filter((content) => {
            
        })
        this.setState({
            filteredContent
        })
    }

    // render() {
    //     return (
    //         <input type="text" id="search-bar-input"
    //             value={this.state.contentFilter}
    //             onChange={this.handleChange} />
    //     )
    // }


}

export default Search;