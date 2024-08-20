import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary atrapó un error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-800 rounded">
          <h1 className="text-3xl font-bold">UPS Algo salió mal.</h1>
          <p>Por favor, intente recargar la página o contacte al soporte.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;