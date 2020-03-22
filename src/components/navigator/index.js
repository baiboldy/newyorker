import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Navigator = props => {


    const changeStateNavigator = () => {
        props.setNavigatorState()
    }

    return (
        <Fragment>
            <div className={classNames('navigator', { 'hide': props.navigator.isOpen })}>
                {props.children}
            </div>
            <div className={classNames('showNavigator', { 'hide': !props.navigator.isOpen })} onClick={changeStateNavigator}>
                #show >
            </div>
        </Fragment>
    )
}

export default connect(
    state => ({
        navigator: state.navigator
    }),
    dispatch => ({
        setNavigatorState: () => {
            dispatch({ type: 'CHANGE_NAVIGATOR_STATE' })
        }
    })

)(Navigator)