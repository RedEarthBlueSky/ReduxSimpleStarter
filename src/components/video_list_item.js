import React from 'react';

//  adding {video} as an argument is the same as adding
//  props as an argument and const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    // bind onVideoSelect to the onclick and have it grab the video
    <li onClick={() => onVideoSelect(video)}  className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL}/>
        </div>

        <div className="media-body">
          <div className="media=heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
