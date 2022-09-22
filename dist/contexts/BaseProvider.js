import { BaseContext } from './contexts';
export default function BaseProvider({
  config,
  children
}) {
  return /*#__PURE__*/React.createElement(BaseContext.Provider, {
    value: {
      api_url: config.environment == "prod" ? config.api.prod : config.environment == "dev" ? config.api.dev || config.api.local : config.api.local,
      ...config
    }
  }, children);
}