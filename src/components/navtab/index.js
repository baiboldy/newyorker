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

    return (
        <div className={classNames('navtab')}>
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
        onAddTab: (name) => {
            dispatch({ type: 'ADD_TAB', payload: name })
        },
        onDeleteTab: (id) => {
            dispatch({ type: 'DELETE_TAB', payload: id })
        }
    })
)(NavTab);