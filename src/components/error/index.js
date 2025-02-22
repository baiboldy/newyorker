import React from 'react'

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false, info: '' }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, info })
    }

    static getDerivedStateFromErro(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary