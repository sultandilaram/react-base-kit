import React from 'react';
import { BaseContext } from '../contexts/contexts';
export default function useBase() {
  const baseConfig = React.useContext(BaseContext);
  if (!baseConfig) throw new Error("ReactBaseKit must have a BaseProvider");
  return baseConfig;
}