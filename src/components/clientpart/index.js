import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Client = props => {
    return (
        <div className={classNames('client')}>
            {props.children}
        </div>
    )
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(Client)