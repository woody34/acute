import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: [
    'binders',
    'contracts',
    'credentialing',
    'logs',
    'user',
  ],
};

export default config;
