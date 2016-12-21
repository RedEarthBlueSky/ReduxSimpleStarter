import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD9_cWYCq5nPqAx5Dwr1sJPxlWBi61ZZVw';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch(surfboards)
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        {/* pass in first video */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          // Give the prop onVideoSelect to the VideoList component
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(
    <App />, document.querySelector('.container')
);
