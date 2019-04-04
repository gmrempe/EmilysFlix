import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contentFilter: "",
            filteredGenres: [],
            filteredTitles: [],
            filteredCreators: [],
            filteredContent: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.filteredContent = this.filteredContent.bind(this)
    }

    handleChange(e) {
        this.setState({
            contentFilter: e.target.value
        })
        this.filteredContent(event.target.value)
    }

    // componentWillMount() {
    //     this.setState({
    //         genres,
    //         // titles,
    //         // people,
    //         filteredGenres: genres,
    //         // filteredTitles: titles,
    //         // filteredPeople: people,
    //     })
    // }

    filteredContent(contentFilter) {
        let filteredGenres = this.props.genres
        filteredGenres = filteredGenres.filter((genre) => {
            let genreName = genre.name.toLowerCase()
            return genreName.indexOf(contentFilter.toLowerCase()) !== -1
        })
        
        this.setState({
            filteredGenres
        })

        let filteredTitles = this.props.videos
        filteredTitles = filteredTitles.filter((video) => {
            let videoTitle = video.title.toLowerCase()
            return videoTitle.indexOf(contentFilter.toLowerCase()) !== -1
        })
        
        this.setState({
            filteredTitles
        })

        let filteredCreators = this.props.videos
        filteredCreators = filteredCreators.filter((video) => {
            let videoCreator = video.creator.toLowerCase()
            return videoCreator.indexOf(contentFilter.toLowerCase()) !== -1
        })
        
        this.setState({
            filteredCreators
        })

        filteredContent = filteredCreators.concat(filteredTitles).concat(filteredGenres)
        filteredIds = filteredContent.map(content => {
            content.id
        })

        this.setState({
            filteredContent: filteredIds
        })

        this.props.search(filteredContent)
    }
    
    render() {
        return (
            <label htmlFor="search" id="search-bar-container">
                <button id="search-bar">
                    <i className="fas fa-search fa-lg"></i>
                    <input type="search" id="search-bar-input"
                    value={this.state.contentFilter}
                    onChange={this.handleChange}
                    placeholder="Title, people, genre" />
                </button>
            </label>
        )
    }
}

export default Search;