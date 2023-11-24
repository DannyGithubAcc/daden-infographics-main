import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Heading1Component } from './heading1.component';

export default {
  title: 'Atoms/Typography',
  component: Heading1Component,
  decorators: [
    moduleMetadata({
      declarations: [Heading1Component],
    }),
  ],
} as Meta;

const Template: Story<Heading1Component> = (args: Heading1Component) => ({
  props: args,
});

export const Heading1 = Template.bind({});
Heading1.args = {
  text: 'This is the main heading (H1).',
};
