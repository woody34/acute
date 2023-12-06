# Acute

A Angular monorepo that uses ssr.

## Feature Segmentation

- user
  - dashboard
  - settings
    - manage-logs
    - manage-dop
    - manage-fillable-forms
    - manage-vendors
    - manage-notifications
    - manage-provider-staff
    - manage users-permissions
  - login
  - create
  - verify
- logs
  - log-list
  - compliance
    - alerts
    - expiring
  - log-details
  - entry
  - print-entry
- credentialing
  - portal
  - provider-list
  - staff-list
  - user-details
- contracts
  - contract-list
  - contract-details
  - print-contract
  - evaluation-list
  - evaluation-details
  - print-evaluation
  - inspection-list
  - inspection-details
  - print-inspection
- binders
  - binder-list
  - binder-details

  https://nx.dev/concepts/module-federation/micro-frontend-architecture
  https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial