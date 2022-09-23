import React from 'react';
import { BaseConfig } from '../types';
declare type Props = {
    config: BaseConfig;
    children: React.ReactNode;
};
export default function BaseProvider({ config, children }: Props): JSX.Element;
export {};
