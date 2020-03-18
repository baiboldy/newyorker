import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Content = (props) => {
    //
    return (
        <div className={classNames('content')}>
            <div className={classNames('film')}>
                <iframe src={`https://api1571848402.delivembed.cc/embed/kp/${props.video.videoId}`} allow="autoplay" width="100%" height="500" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen=""></iframe>
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