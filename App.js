import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Calculator from './Calculator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Calculator />
    </>
  );
}
