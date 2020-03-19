import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Content = (props) => {
    return (
        <div className={classNames('content')}>
            <div className={classNames('film')}>
                <iframe title={props.video.id} src={`//90.videocdn.pw/Crwg12H8IZM7/movie/${props.video.videoId}`} width="100%" height="500" frameborder="0" allowfullscreen='1'></iframe>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        video: state.video.find(i => i.active)
    }),
    dispatch => ({
    })
)(Content)