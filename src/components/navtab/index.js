import React, {useEffect, useState} from 'react'
import classNames from 'classnames'

const NavTab = (props) => {

    const [title, setTitle] = useState(props.title)

    useEffect(() => {
        setTitle(props.title)
    }, [props.title])

    return (
        <div className={classNames('navtab')}>
            {title}
        </div>
    )
}

export default NavTab