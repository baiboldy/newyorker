import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

const NavTab = (props) => {

    const [title, setTitle] = useState(props.title)

    useEffect(() => {
        setTitle(props.title)
    }, [props.title])

    const onCloseClick = (event) => {
        event.stopPropagation()
        props.onUpdateActiveTab()
        props.onDeleteTab(props.id)
    }

    const onUpdateActive = () => {
        props.onUpdateActiveTab(props.id)
    }

    return (
        <div onClick={onUpdateActive} className={classNames('navtab', { 'active': props.active })}>
            <div className='title'>
                {title}
                <div className='close' onClick={(event) => onCloseClick(event)}></div>
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
        onSwitchMain: () => {
            dispatch({ type: 'SWITCH_MAIN', payload: null })
        }
    })
)(NavTab);