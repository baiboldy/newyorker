import React from 'react'
import classNames from 'classnames'

const NavBar = (props) => {
    return (
        <div className={classNames('navbar')}>
            {props.children}
        </div>
    )
}

export default NavBar