import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Card from '../card'
import ViewMovie from '../viewmovie'

const Content = (props) => {
    const choosePage = () => {
        if (props.activePage && props.activePage.tag && props.activePage.tag === '#main') {
            return props.content.map((movie) =>
                <Card id={movie.id} title={movie.ru_title} year={movie.year} origTitle={movie.orig_title} />
            )
        } else if (props.activePage && props.activePage.tag && props.activePage.tag === '#news') {

        }
        else {
            return <ViewMovie />
        }
    }

    return (
        <div className={classNames('content')}>
            {
                choosePage()
            }
        </div>
    )
}

export default connect(
    state => ({
        content: state.content,
        activePage: state.tabs.find(i => i.active)
    }),
    dispatch => ({

    })
)(Content)