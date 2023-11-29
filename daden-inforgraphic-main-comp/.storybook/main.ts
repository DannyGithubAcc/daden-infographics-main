// .storybook/main.ts

import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    extractArgTypes: false,
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
    extractComponentSubtitle: (component, { parameters }) => {
      return parameters && parameters.subtitle ? parameters.subtitle : null;
    },
    sidebar: {
      Category: {
        Components: ['src/*/*/*.mdx'],
        // Add more categories and file patterns as needed
      },
    },
  },
};

export default config;
