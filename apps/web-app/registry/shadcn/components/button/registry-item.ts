import type { RegistryItem } from 'shadcn/registry'

export const registryItem = {
  name: 'button',
  type: 'registry:component',
  title: 'Button',
  description: 'A simple button component',
  categories: ['Feedback'],
  registryDependencies: [],
  files: [
    {
      path: 'registry/shadcn/components/button/component.tsx',
      type: 'registry:component',
    },
  ],
} satisfies RegistryItem
