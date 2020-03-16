import React, { useRef } from 'react'
import { connect } from 'react-redux'

const TextBox = (props) => {

    const inputRef = useRef(null)

    const onTextChange = () => {
        props.onAddTab(inputRef.current.value)
    }

    const onEnterClick = (event) => {
        switch (event.keyCode) {
            case 13:
                props.onAddTab(inputRef.current.value)
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <input type='text' ref={inputRef} onKeyUp={onEnterClick} />
            <button onClick={onTextChange} >Отправить</button>
        </div>
    )
}

export default connect(
    state => ({

    }),
    dispatch => ({
        onAddTab: (name) => {
            dispatch({ type: 'ADD_TAB', payload: name })
        }
    })
)(TextBox)