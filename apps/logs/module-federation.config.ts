import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'logs',
  exposes: {
    './Routes': 'apps/logs/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
