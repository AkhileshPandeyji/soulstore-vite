import { PropsWithChildren, PureComponent } from "react";

interface ErrorBoundaryProps extends PropsWithChildren {
  onError?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorMessage: string | null | undefined;
}

// catches error in render(), lifecycle methods and constructor()
// of the underlying Tree components
// does not catch errors of the event handlers - use normal try/catch there.
// error triggers the nearest errorboundary - works just like try/catch.
class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorMessage: null,
    };
  }

  // first this is called upon catching error
  // decides to show the fallback UI
  // returns the state filtered from Error
  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  // at second this is called after static getDerivedStateFromError
  // here perform action (logging to a service etc.) upon error
  // generic onError as a prop is being called here.
  componentDidCatch(error: Error): void {
    const { onError } = this.props;
    this.setState((prev) => ({
      ...prev,
      hasError: true, // in case not set to true
      error,
      errorMessage: error.message
    }));
    if (onError) onError();
  }

  render() {
    const { children } = this.props;
    const { hasError, error, errorMessage } = this.state;

    // Fallback UI on Error
    if (hasError) return (
      <>
        <h1>Something Went Wrong!!!</h1>
        <p>Error Message : {errorMessage}</p>
        <p>Error Stack: {error?.stack}</p>
      </>
    )
    // Standard UI - underlying Tree UI (children)
    return children;
  }
}

export default ErrorBoundary;