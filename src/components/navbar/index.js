import React from 'react'
import classNames from 'classnames'
import NavTab from '../navtab'
import { connect } from 'react-redux';

const NavBar = (props) => {
    return (
        <div ref={props.width} className={classNames('navbar')}>
            {props.tabs.map((i, idx) =>
                <NavTab
                    key={idx}
                    id={i.id}
                    title={i.name}
                    active={i.active}
                />
            )}
        </div>
    )
}

export default connect(
    state => ({
        tabs: state.tabs
    })
)(NavBar);