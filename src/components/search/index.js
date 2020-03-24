import React, { useRef } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { asyncFindMovies } from '../../actions/movies'

const Search = props => {
    const searchInput = useRef(null)

    const onPressKey = (event) => {
        if (event.keyCode === 13) {
            props.onFindMovies(searchInput.current.value)
            searchInput.current.value = ''
        }
    }

    const onItemPress = (item) => {
        if (props.tabs.some(i => i.id === item.id)) {
            props.updateMainPage(item.id)
        } else {
            props.addTab(item.id, item.ru_title)
            props.updateMainPage(item.id)
        }
    }

    const changeStateNavigator = () => {
        props.setNavigatorState()
    }

    return (
        <div className={classNames('search')}>
            <div className={classNames('search-title')}>Поиск фильмов</div>
            <div className={classNames('close')} onClick={changeStateNavigator}>×</div>
            <input onKeyUp={onPressKey} ref={searchInput} placeholder='Search' type='text' />
            <ul className={classNames('list')}>
                {props.foundMovies.map(movie => {
                    return <li onClick={() => onItemPress(movie)} className={classNames('item')}>{movie.ru_title}</li>
                })}
            </ul>
        </div>
    )
}

export default connect(
    state => ({
        foundMovies: state.search,
        tabs: state.tabs
    }),
    dispatch => ({
        onFindMovies: (title) => {
            dispatch(asyncFindMovies(title))
        },
        updateMainPage: (id) => {
            dispatch({ type: 'UPDATE_ACTIVE_TAB', payload: id })
        },
        addTab: (id, name) => {
            dispatch({ type: 'ADD_TAB', payload: { id, name } })
        },
        setNavigatorState: () => {
            dispatch({ type: 'CHANGE_NAVIGATOR_STATE' })
        }
    })
)(Search)