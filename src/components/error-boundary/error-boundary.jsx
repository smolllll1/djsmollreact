import React from "react";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

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
                Something went wrong! <span>go back<Link to={"/"} reloadDocument className="text-decoration-none"> home</Link></span>
            </Alert>
            // return <p>Something went wrong</p>
            // return this.props.fallback;
        }
        return this.props.children;
    }
}

export { ErrorBoundary };