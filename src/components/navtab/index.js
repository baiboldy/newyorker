import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

const NavTab = (props) => {

    const [title, setTitle] = useState(props.title)

    useEffect(() => {
        setTitle(props.title)
    }, [props.title])

    const onCloseClick = () => {
        props.onDeleteTab(props.id)
    }

    const onUpdateActive = () => {
        props.onUpdateActiveTab(props.id)
        props.onUpdateVideo(props.videoId)
    }

    return (
        <div onClick={onUpdateActive} className={classNames('navtab', { 'active': props.active })}>
            <div className='title'>
                {title}
                <div className='close' onClick={onCloseClick}></div>
            </div>
        </div>
    )
}

export default connect(
    state => ({}),
    dispatch => ({
        onDeleteTab: (id) => {
            dispatch({ type: 'DELETE_TAB', payload: id })
        },
        onUpdateActiveTab: (id) => {
            dispatch({ type: 'UPDATE_ACTIVE_TAB', payload: id })
        },
        onUpdateVideo: (videoId) => {
            dispatch({ type: 'UPDATE_ACTIVE_VIDEO', payload: videoId })
        }
    })
)(NavTab);