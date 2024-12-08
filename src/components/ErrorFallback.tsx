import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { RefreshCw } from 'lucide-react';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600">{error.message}</p>
        </div>
        <button
          onClick={resetErrorBoundary}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try again
        </button>
      </div>
    </div>
  );
}