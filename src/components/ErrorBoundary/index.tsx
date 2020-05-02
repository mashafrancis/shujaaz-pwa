import * as React from 'react';

// interfaces
import { ErrorBoundaryState } from '@components/ErrorBoundary/interfaces';
import CharacterNotFound from "@components/CharacterNotFound";

export class ErrorBoundary extends React.Component<ErrorBoundaryState> {
  state = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return ( <CharacterNotFound /> );
    }

    // when there's not an error, render children untouched
    return this.props.children;
  }
}

export default ErrorBoundary;
