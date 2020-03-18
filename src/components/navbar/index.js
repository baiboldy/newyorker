import React from 'react'
import classNames from 'classnames'
import NavTab from '../navtab'
import { connect } from 'react-redux';

const NavBar = (props) => {
    return (
        <div className={classNames('navbar')}>
            {props.tabs.map((i, idx) =>
                <NavTab
                    key={idx}
                    id={i.id}
                    title={i.name}
                    active={i.active}
                    videoId={i.videoId}
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