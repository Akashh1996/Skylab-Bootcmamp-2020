import React from 'react';
import { ActivityIndicator } from 'react-native';

function LoadingSpinner() {
  return (
    <ActivityIndicator
      size="large"
      color="red"
    />
  );
}

export default LoadingSpinner;
