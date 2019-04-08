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
        this.filterContent = this.filterContent.bind(this)
    }

    handleChange(e) {
        this.setState({
            contentFilter: e.target.value
        }, () => this.filterContent(event.target.value))
    }

    filterContent(contentFilter) {
        this.props.clearSearch();

        let filteredGenres = this.props.genres;
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

        this.state.filteredContent = filteredCreators.concat(filteredTitles).concat(filteredGenres)
        const filteredIds = this.state.filteredContent.map(content => {
            return content.id
        })
        
        if (this.state.contentFilter.trim() === '') {
            this.setState({
                filteredContent: []
            })
            return this.props.clearSearch();
        }
        
        this.props.search(filteredIds)
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