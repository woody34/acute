import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'contracts',
  exposes: {
    './Routes': 'apps/contracts/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
