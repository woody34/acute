import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'binders',
  exposes: {
    './Routes': 'apps/binders/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
