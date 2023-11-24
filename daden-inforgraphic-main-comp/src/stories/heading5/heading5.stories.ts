import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Heading5Component } from './heading5.component';

export default {
  title: 'Atoms/Typography',
  component: Heading5Component,
  decorators: [
    moduleMetadata({
      declarations: [Heading5Component],
    }),
  ],
} as Meta;

const Template: Story<Heading5Component> = (args: Heading5Component) => ({
  props: args,
});

export const Heading5 = Template.bind({});
Heading5.args = {
  text: 'This is the sub sub heading (H5).',
};
