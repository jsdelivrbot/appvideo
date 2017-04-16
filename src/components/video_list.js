/**
 * Created by viasyst on 15/04/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videosItems = props.videos.map((video) => {
        return (
            <VideoListItem
                key={video.etag}
                video={video}
                onVideoSelect={props.onVideoSelect}
            />
        );
    }
    );
    return (
      <ul className="col-md-4 list-group">
          {videosItems}
      </ul>
    );
}

export default VideoList;