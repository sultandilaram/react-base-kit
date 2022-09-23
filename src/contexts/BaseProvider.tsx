import React from 'react'
import { BaseConfig } from '../types'
import { BaseContext } from './contexts'

type Props = { config: BaseConfig, children: React.ReactNode }
export default function BaseProvider({ config, children }: Props) {
  return (
    <BaseContext.Provider value={{
      api_url: config.environment == "prod" ? config.api.prod : config.environment == "dev" ? config.api.dev || config.api.local : config.api.local,
      ...config
    }} >
      {children}
    </BaseContext.Provider>
  )
}
