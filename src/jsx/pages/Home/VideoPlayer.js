import React from 'react'
import videoFile from '../../../video/file.mp4'
class VideoPlayer extends React.Component {
    render() {
        return (
            <video poster="placeholder.png" autoPlay={true} controls={true} onClick={this.testClick}>
                <source src={videoFile} type="video/mp4" />
            </video>
        );
    }
}

export default VideoPlayer;