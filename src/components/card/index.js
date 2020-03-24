import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Card = props => {

    const onShowVideo = () => {
        if (props.tabs.some(i => i.id === props.id)) {
            props.updateMainPage(props.id)
        } else {
            props.addTab(props.id, props.title)
            props.updateMainPage(props.id)
        }
    }

    return (
        <div className={classNames('card')}>
            <div onClick={onShowVideo} className={classNames('title')}>{props.title}/{props.origTitle}</div>
            <hr></hr>
            <div>{props.year.split('-')[0]}</div>
        </div>
    )
}

export default connect(
    state => ({
        tabs: state.tabs
    }),
    dispatch => ({
        updateMainPage: (id) => {
            dispatch({ type: 'UPDATE_ACTIVE_TAB', payload: id })
        },
        addTab: (id, name) => {
            dispatch({ type: 'ADD_TAB', payload: { id, name } })
        }
    })
)(Card)