import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Heading2Component } from './heading2.component';

export default {
  title: 'Atoms/Typography',
  component: Heading2Component,
  decorators: [
    moduleMetadata({
      declarations: [Heading2Component],
    }),
  ],
} as Meta;

const Template: Story<Heading2Component> = (args: Heading2Component) => ({
  props: args,
});

export const Heading2 = Template.bind({});
Heading2.args = {
  text: 'This is the sub heading (H2).',
};
