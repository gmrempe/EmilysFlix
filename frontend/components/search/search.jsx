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
        // this.handleSearchFocus = this.handleSearchFocus.bind(this)
    }

    handleChange(e) {
        this.setState({
            contentFilter: e.target.value
        }, () => this.filterContent(event.target.value))
    }

    // handleSearchFocus(e) {
    //     e.preventDefault();
    //     debugger
    //     // e.target.children[1].focus();
    // }

    filterContent(contentFilter) {

        const videos = this.props.videos;
        let filteredGenres = this.props.genres;
        filteredGenres = filteredGenres.filter((genre) => {
            let genreName = genre.name.toLowerCase();
            return genreName.indexOf(contentFilter.toLowerCase()) !== -1
        })
            //convert genres into videos
        const processedGenres = filteredGenres.map(genre => {
            let filterGenres = genre.videoIds.map(id => videos.filter(video => video.id == id));
            return filterGenres = filterGenres.flat();
        })

        let filteredTitles = videos;
        filteredTitles = filteredTitles.filter((video) => {
            let videoTitle = video.title.toLowerCase();
            return videoTitle.indexOf(contentFilter.toLowerCase()) !== -1
        })

        let filteredCreators = videos;
        filteredCreators = filteredCreators.filter((video) => {
            let videoCreator = video.creator.toLowerCase();
            return videoCreator.indexOf(contentFilter.toLowerCase()) !== -1
        })
        
        this.setState({
            filteredCreators,
            filteredGenres,
            filteredTitles
        })
        //convert all results into ids
        this.state.filteredContent = filteredCreators.concat(filteredTitles).concat(processedGenres.flat());
        const filteredIds = this.state.filteredContent.map(content => {
            return content.id
        })
        
        if (this.state.contentFilter.trim() === '') {
            this.setState({
                filteredContent: []
            })
            return this.props.clearSearch();
        }
        
        const uniqueIds = [];
        filteredIds.forEach (id => {
            if (!uniqueIds.includes(id)) {
                return uniqueIds.push(id);
            }
        })
        
        this.props.search(uniqueIds, contentFilter)
    }

    render() {
        return (
            <label htmlFor="search" id="search-bar-container" >
                <button id="search-bar">
                    <i className="fas fa-search fa-lg" ></i>
                    <input type="search" id="search-bar-input"
                    value={this.state.contentFilter}
                    onChange={this.handleChange}
                    placeholder="Title, people, genre" 
                    />
                </button>
            </label>
        )
    }
}

export default Search;