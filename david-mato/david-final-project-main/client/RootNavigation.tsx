/* istanbul ignore file */
import * as React from 'react';

interface Navigate {
  navigate(name: string, params: object | null): void
}

interface NavigationRef {
  current: Navigate | null
}

export const navigationRef: NavigationRef = React.createRef();

export function navigate(name : string, params : object | null) {
  navigationRef.current?.navigate(name, params);
}
