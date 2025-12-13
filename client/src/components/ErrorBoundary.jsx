import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container" style={{ textAlign: 'center', marginTop: '10vh' }}>
                    <h1>Something went wrong.</h1>
                    <p>We apologize for the inconvenience. Please refresh the page.</p>
                    <details style={{ whiteSpace: 'pre-wrap', color: 'red', marginTop: '1rem' }}>
                        {this.state.error && this.state.error.toString()}
                    </details>
                    <br />
                    <button className="btn btn-primary" onClick={() => window.location.reload()}>
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
