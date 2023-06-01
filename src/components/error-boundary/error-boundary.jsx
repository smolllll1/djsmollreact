import React from "react";
import Alert from 'react-bootstrap/Alert';

class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
    }

    componentDidCatch() {
        return this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <Alert variant="danger">
                Something went wrong!
            </Alert>
            // return <p>Something went wrong</p>
            // return this.props.fallback;
        }
        return this.props.children;
    }
}

export { ErrorBoundary };