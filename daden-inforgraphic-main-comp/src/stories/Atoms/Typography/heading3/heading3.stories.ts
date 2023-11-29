import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Heading3Component } from './heading3.component';

export default {
  title: 'Atoms/Typography',
  component: Heading3Component,
  decorators: [
    moduleMetadata({
      declarations: [Heading3Component],
    }),
  ],
} as Meta;

const Template: Story<Heading3Component> = (args: Heading3Component) => ({
  props: args,
});

export const Heading3 = Template.bind({});
Heading3.args = {
  text: 'This is the sub sub heading (H3).',
};
