import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const ViewMovie = props => {
    return (
        <div className={classNames('ViewMovie')}>
            <div className={classNames('film')}>
                <iframe title={props.movie.id} src={`//90.videocdn.pw/Crwg12H8IZM7/movie/${props.movie.id}`} width="100%" height="500" frameborder="0" allowfullscreen="1"></iframe>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        movie: state.tabs.find(i => i.active)
    })
)(ViewMovie)