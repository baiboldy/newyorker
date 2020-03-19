import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const Search = props => {
    return (
        <div className={classNames('search')}>
            <div className={classNames('search-title')}>Поиск фильмов</div>
            <input placeholder='Search' type='text' />
        </div>
    )
}

export default connect()(Search)